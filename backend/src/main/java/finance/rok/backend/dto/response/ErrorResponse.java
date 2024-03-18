package finance.rok.backend.dto.response;

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
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ErrorResponse {
    private int status;
    private String message;
    private final Long timestamp = System.currentTimeMillis();
    private List<String> stackTrace = new ArrayList<>();
}
