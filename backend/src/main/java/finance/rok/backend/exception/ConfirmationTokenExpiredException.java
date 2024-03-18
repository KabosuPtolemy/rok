package finance.rok.backend.exception;

public class ConfirmationTokenExpiredException extends RuntimeException {

    public ConfirmationTokenExpiredException() {
        super("Token expired");
    }

}
