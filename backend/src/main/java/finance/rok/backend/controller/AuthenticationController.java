package finance.rok.backend.controller;

import finance.rok.backend.dto.UserDTO;
import finance.rok.backend.dto.request.RegisterUserRequest;
import finance.rok.backend.dto.response.BaseResponse;
import finance.rok.backend.service.UserService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthenticationController {

    private final UserService userService;

    @GetMapping("/{userId}/enable-account")
    public ResponseEntity<String> enableAccount(@PathVariable String userId) {
        String response = userService.enableAccount(userId);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{email}")
    public ResponseEntity<UserDTO> getUserByEmail(@PathVariable String email) {
        UserDTO userDTO = userService.getUserByEmail(email);
        return new ResponseEntity<>(userDTO, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<String> profile() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null) {
            return new ResponseEntity<>("User successfully logged in!", HttpStatus.OK);
        } else {
            throw new BadCredentialsException("Unauthorized");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<BaseResponse> registerUser(@RequestBody @Valid RegisterUserRequest registerUserRequest) {
        BaseResponse response = userService.registerUser(registerUserRequest);
        return new ResponseEntity<>(response, HttpStatus.valueOf(response.getStatus()));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable String id, @RequestBody UserDTO userDTO) {
        UserDTO user = userService.updateUser(id, userDTO);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteUser(@PathVariable String id) {
        userService.deleteUserById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
