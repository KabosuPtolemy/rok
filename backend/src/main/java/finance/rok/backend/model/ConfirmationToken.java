package finance.rok.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Document("confirmation_tokens")
public class ConfirmationToken {

    @Id
    private String id;

    private String token;

    private Long created;

    private Long expires;

    private String userId;

}
