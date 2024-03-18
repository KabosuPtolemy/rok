package finance.rok.backend.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import java.sql.Timestamp;

@AllArgsConstructor
@NoArgsConstructor
@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProjectDTO {

    private String id;

    @NotBlank
    @Length(max = 50, message = "Name attribute cannot be bigger than 100 characters")
    private String name;

    @NotBlank
    @Length(max = 150, message = "Description attribute cannot be bigger than 200 characters")
    private String description;

    @Length(max = 200, message = "Contract URL attribute cannot be bigger than 200 characters")
    private String contractUrl;

    @NotNull
    @DecimalMin("0.0")
    private Double price;

    @NotNull
    @Size(min = 50, max = 10_000, message = "Goal attribute must be bigger than 0")
    private Integer goal;

    private Boolean kyc;

    @NotBlank
    @Length(min=42, max = 42, message = "Owner address attribute must be 42 characters long")
    private String ownerAddress;

    @Length(max = 200, message = "Discord URL attribute cannot be bigger than 200 characters")
    private String discordUrl;

    @Length(max = 200, message = "Opensea URL attribute cannot be bigger than 200 characters")
    private String openseaUrl;

    @Length(max = 200, message = "Twitter URL attribute cannot be bigger than 200 characters")
    private String twitterUrl;

    @Length(max = 200, message = "Website URL attribute cannot be bigger than 200 characters")
    private String websiteUrl;

    private Timestamp created;

    private Timestamp changed;

    @NotNull
    private Timestamp endDate;

    private Boolean isPublished;

    private Long subscriberCount;

    @NotNull
    private Integer chainId;
}
