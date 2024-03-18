package finance.rok.backend.dto.response;

import com.fasterxml.jackson.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
import java.util.Map;

@AllArgsConstructor
@NoArgsConstructor
@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonPropertyOrder({ "success", "score", "action", "challenge_ts", "hostname", "error-codes" })
public class GoogleResponse {

    @JsonProperty("success")
    private boolean success;
    @JsonProperty("challenge_ts")
    private String challengeTs;
    @JsonProperty("hostname")
    private String hostname;
    @JsonProperty("score")
    private float score;
    @JsonProperty("action")
    private String action;
    @JsonProperty("error-codes")
    private ErrorCode[] errorCodes;

    enum ErrorCode {
        MissingSecret,
        InvalidSecret,
        MissingResponse,
        InvalidResponse,
        BadRequest,
        TimeoutOrDuplicate;

        private static final Map<String, ErrorCode> errorsMap = new HashMap<>(6);

        static {
            errorsMap.put("missing-input-secret", MissingSecret);
            errorsMap.put("invalid-input-secret", InvalidSecret);
            errorsMap.put("missing-input-response", MissingResponse);
            errorsMap.put("bad-request", InvalidResponse);
            errorsMap.put("invalid-input-response", BadRequest);
            errorsMap.put("timeout-or-duplicate", TimeoutOrDuplicate);
        }

        @JsonCreator
        public static ErrorCode forValue(final String value) {
            return errorsMap.get(value.toLowerCase());
        }
    }

    @JsonIgnore
    public boolean hasClientError() {
        final ErrorCode[] errors = getErrorCodes();
        if (errors == null) {
            return false;
        }
        for (final ErrorCode error : errors) {
            switch (error) {
                case InvalidResponse:
                case MissingResponse:
                case BadRequest:
                    return true;
                default:
                    break;
            }
        }
        return false;
    }
}
