package finance.rok.backend.dto.request;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class RegisterUserRequest {

    @NotBlank(message = "Email attribute cannot be blank")
    @Length(max = 100, message = "Email attribute cannot be bigger than 100 characters")
    @Email(message = "Email attribute has to be a valid email")
    private String email;

    @NotBlank(message = "Password attribute cannot be blank")
    @Length(min = 8, max = 100, message = "Password attribute has to be between 8 and 100 characters long")
    private String password;

    @NotBlank(message = "Wallet address attribute cannot be blank")
    @Length(min = 42, max = 42, message = "Wallet address attribute has to be 42 characters long")
    private String walletAddress;
}
