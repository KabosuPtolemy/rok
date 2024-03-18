package finance.rok.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Document("images")
public class Image {

    @Id
    private String id;

    private String fullUrl;

    private String teaserUrl;

    private String projectId;

}
