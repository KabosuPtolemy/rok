package finance.rok.backend.service;

import finance.rok.backend.dto.response.BaseResponse;
import finance.rok.backend.exception.SendEmailFailedException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    private static final Logger LOGGER = LoggerFactory.getLogger(EmailServiceImpl.class);

    private final JavaMailSender mailSender;

    public EmailServiceImpl(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Override
    public BaseResponse sendEmail(String email, String token) {
        try {
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setTo(email);
            mailMessage.setSubject("Confirm your registration!");
            mailMessage.setText(
                    "To confirm your account, please click here: "
                            + "http://localhost:8080/user-validation/confirm-account?token=" + token
            );
            mailSender.send(mailMessage);

            BaseResponse response = new BaseResponse();
            response.setStatus(HttpStatus.OK.value());
            response.setMessage("An confirmation email has been sent to \"" + email + "\".");
            return response;

        } catch (Exception e) {
            LOGGER.error(e.getMessage());
            throw new SendEmailFailedException();
        }
    }

}
