package finance.rok.backend.service;


import finance.rok.backend.dto.request.SendEmailRequest;
import finance.rok.backend.dto.response.BaseResponse;

public interface UserValidationService {

    String confirmUserEmail(String token);

    BaseResponse sendConfirmationEmail(SendEmailRequest sendEmailRequest);

}
