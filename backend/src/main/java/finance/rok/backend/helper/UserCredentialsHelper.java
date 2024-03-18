package finance.rok.backend.helper;

import finance.rok.backend.util.Base64Util;

import java.util.Map;

import static finance.rok.backend.util.Constants.EMAIL;
import static finance.rok.backend.util.Constants.PASSWORD;

public class UserCredentialsHelper {

    private UserCredentialsHelper() {

    }

    public static Map<String, String> extractCredentials(String encodedCredentials) {
        String decodedCredentials = Base64Util.decode(encodedCredentials);
        if (!decodedCredentials.contains(":")) {
            return Map.of();
        }

        String[] credentials = decodedCredentials.split(":");
        return Map.of(EMAIL, credentials[0].trim(), PASSWORD, credentials[1].trim());
    }

    public static boolean areCredentialsEmpty(Map<String, String> credentials) {
        return credentials.isEmpty() || credentials.get(EMAIL).isEmpty() || credentials.get(PASSWORD).isEmpty();
    }

}
