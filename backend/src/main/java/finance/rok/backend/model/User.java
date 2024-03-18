package finance.rok.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.ReadOnlyProperty;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Document("users")
public class User {

    @Id
    private String id;

    private String email;

    private String walletAddress;

    private String password;

    private Long created;

    private Boolean enabled;

    private Long lastSeen;

    private String image;

    private String imageColor;

    @DBRef
    private List<Authority> authorities;

}
