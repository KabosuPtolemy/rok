package finance.rok.backend.util;

public class Constants {

    public static final String AUTHORIZATION_HEADER = "authorization";
    public static final String BASIC_PREFIX = "Basic ";

    public static final String JWT_PREFIX = "Bearer ";

    public static final String EMAIL = "email";
    public static final String PASSWORD = "password";
    public static final long JWT_TOKEN_VALIDITY = 5 * 60 * 60 * 1000;

    private Constants() {

    }

}
