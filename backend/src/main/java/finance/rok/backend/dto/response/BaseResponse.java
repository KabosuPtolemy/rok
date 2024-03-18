package finance.rok.backend.dto.response;

import lombok.Data;

@Data
public class BaseResponse {

    private int status;
    private String message;
    private final Long timestamp = System.currentTimeMillis();

}
