package finance.rok.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AuthorityDTO {

    private String id;
    private String name;
    private Long userId;

}
