package finance.rok.backend.service;

import finance.rok.backend.dto.request.SendEmailRequest;
import finance.rok.backend.dto.response.BaseResponse;
import finance.rok.backend.exception.ConfirmationTokenExpiredException;
import finance.rok.backend.exception.InvalidConfirmationTokenException;
import finance.rok.backend.exception.UserNotFoundException;
import finance.rok.backend.helper.ConfirmationTokenHelper;
import finance.rok.backend.model.ConfirmationToken;
import finance.rok.backend.model.User;
import finance.rok.backend.repository.ConfirmationTokenRepository;
import finance.rok.backend.repository.UserRepository;
import org.apache.commons.lang3.RandomStringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Optional;

@Service
public class UserValidationServiceImpl implements UserValidationService {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserValidationServiceImpl.class);

    private final ConfirmationTokenRepository tokenRepository;
    private final UserRepository userRepository;
    private final EmailService emailService;

    public UserValidationServiceImpl(
            ConfirmationTokenRepository tokenRepository,
            UserRepository userRepository,
            EmailService emailService
    ) {
        this.tokenRepository = tokenRepository;
        this.userRepository = userRepository;
        this.emailService = emailService;
    }

    @Override
    public String confirmUserEmail(String token) {
        Optional<ConfirmationToken> optionalToken = tokenRepository.findByToken(token);
        if (optionalToken.isPresent()) {
            ConfirmationToken confirmationToken = optionalToken.get();
            boolean isValid = ConfirmationTokenHelper.isTokenValid(confirmationToken);
            if (isValid) {
                Optional<User> optionalUser = userRepository.findById(confirmationToken.getUserId());
                if (optionalUser.isEmpty()) {
                    throw new UserNotFoundException();
                }
                User user = optionalUser.get();
                user.setEnabled(true);
                userRepository.save(user);
                tokenRepository.deleteByToken(confirmationToken.getToken());

                return "User account confirmed!";
            } else {
                userRepository.deleteById(confirmationToken.getUserId());
                tokenRepository.deleteByToken(confirmationToken.getToken());

                throw new ConfirmationTokenExpiredException();
            }
        } else {
            throw new InvalidConfirmationTokenException();
        }
    }

    @Override
    public BaseResponse sendConfirmationEmail(SendEmailRequest sendEmailRequest) {
        String email = sendEmailRequest.getEmail();
        LOGGER.info("Sending confirmation email to {}", email);
        ConfirmationToken token = ConfirmationToken
                .builder()
                .token(RandomStringUtils.random(64, true, true))
                .created(Instant.now().toEpochMilli())
                .expires(Instant.now().plus(1, ChronoUnit.HOURS).toEpochMilli())
                .userId(sendEmailRequest.getUserId())
                .build();

        LOGGER.info("Saving confirmation token \"{}\" for user \"{}\"", token.getToken(), email);
        tokenRepository.save(token);

        return emailService.sendEmail(email, token.getToken());
    }

}
