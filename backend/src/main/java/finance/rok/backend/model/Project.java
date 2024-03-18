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
@Document("projects")
public class Project {

    @Id
    private String id;

    private String name;

    private String description;

    private String contractUrl;

    private Double price;

    private Integer goal;

    private Boolean kyc;

    private String ownerAddress;

    private String discordUrl;

    private String openseaUrl;

    private String twitterUrl;

    private String websiteUrl;

    private Long created;

    private Long changed;

    private Long endDate;

    private Boolean isPublished;

    @DBRef
    private List<Subscriber> subscribers;

    @DBRef
    private List<Image> images;



}
