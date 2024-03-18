package finance.rok.backend.service;

import finance.rok.backend.dto.UserDTO;
import finance.rok.backend.dto.request.RegisterUserRequest;
import finance.rok.backend.dto.request.SendEmailRequest;
import finance.rok.backend.dto.response.BaseResponse;
import finance.rok.backend.exception.EmailAddressAlreadyExistsException;
import finance.rok.backend.exception.UserNotFoundException;
import finance.rok.backend.mapper.AuthorityMapper;
import finance.rok.backend.mapper.UserMapper;
import finance.rok.backend.model.User;
import finance.rok.backend.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.time.Instant;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final AuthorityMapper authorityMapper;
    private final BCryptPasswordEncoder passwordEncoder;
    private final UserValidationService validationService;

    @Override
    public String enableAccount(String id) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setEnabled(true);
            userRepository.save(user);
            return String.format("User account \"%s\" enabled", user.getEmail());
        } else {
            throw new UserNotFoundException();
        }
    }

    @Override
    public UserDTO getUserByEmail(String email) {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        return handleOptionalUser(optionalUser);
    }

    @Override
    public BaseResponse registerUser(RegisterUserRequest registerUserRequest) {
        Optional<User> optionalUser = userRepository.findByEmail(registerUserRequest.getEmail());
        if (optionalUser.isPresent()) {
            throw new EmailAddressAlreadyExistsException();
        }

        User user = User.builder()
                .enabled(false)
                .email(registerUserRequest.getEmail())
                .password(passwordEncoder.encode(registerUserRequest.getPassword()))
                .walletAddress(registerUserRequest.getWalletAddress())
                .created(Instant.now().toEpochMilli())
                .lastSeen(Instant.now().toEpochMilli())
                .build();

        LOGGER.info("Saving user: {}", user.getEmail());
        user = userRepository.save(user);
        // Send validation email
        return validationService.sendConfirmationEmail(new SendEmailRequest(user.getEmail(), user.getId()));
    }

    @Override
    public UserDTO updateUser(String id, UserDTO userDTO) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setLastSeen(Instant.now().toEpochMilli());
            user.setEnabled(userDTO.getEnabled());
            user.setWalletAddress(userDTO.getWalletAddress());
            user.setEmail(userDTO.getEmail());

            user = userRepository.save(user);

            return userMapper.toDTO(user);
        } else {
            throw new UserNotFoundException();
        }
    }

    @Override
    public void deleteUserById(String id) {
       userRepository.deleteById(id);
    }

    private UserDTO handleOptionalUser(Optional<User> optionalUser) {
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            UserDTO userDTO = userMapper.toDTO(user);
            userDTO.setAuthorities(authorityMapper.toDTOList(user.getAuthorities()));
            return userDTO;
        } else {
            throw new UserNotFoundException();
        }
    }

}
