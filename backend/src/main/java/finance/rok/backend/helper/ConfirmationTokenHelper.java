package finance.rok.backend.helper;

import finance.rok.backend.model.ConfirmationToken;
import java.time.Instant;

public class ConfirmationTokenHelper {

    private ConfirmationTokenHelper() {

    }

    public static boolean isTokenValid(ConfirmationToken token) {
        return token.getExpires() >= Instant.now().toEpochMilli();
    }

}
