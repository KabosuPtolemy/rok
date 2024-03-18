package finance.rok.backend.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserDTO {

    private String id;
    private String email;
    private String password;
    private String walletAddress;
    private Long created;
    private Boolean enabled;
    private Long lastSeen;
    private String image;
    private String imageColor;
    private List<AuthorityDTO> authorities = new ArrayList<>();

}
