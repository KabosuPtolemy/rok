package finance.rok.backend.service;

import finance.rok.backend.dto.response.BaseResponse;

public interface EmailService {

    BaseResponse sendEmail(String email, String token);

}
