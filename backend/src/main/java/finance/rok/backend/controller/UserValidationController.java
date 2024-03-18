package finance.rok.backend.controller;

import finance.rok.backend.dto.request.SendEmailRequest;
import finance.rok.backend.dto.response.BaseResponse;
import finance.rok.backend.service.UserValidationService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user-validation")
@AllArgsConstructor
public class UserValidationController {

    private final UserValidationService validationService;

    @GetMapping("/confirm-account")
    public ResponseEntity<String> confirmUserAccount(@RequestParam("token") String token) {
        String response = validationService.confirmUserEmail(token);

        return ResponseEntity.ok(response);
    }

    @PostMapping("/send-email")
    public ResponseEntity<BaseResponse> sendEmail(@RequestBody @Valid SendEmailRequest sendEmailRequest) {
        BaseResponse response = validationService.sendConfirmationEmail(sendEmailRequest);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
