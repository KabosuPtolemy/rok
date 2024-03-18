package finance.rok.backend.exception;

public class InvalidConfirmationTokenException extends RuntimeException {

    public InvalidConfirmationTokenException() {
        super("Invalid confirmation token");
    }

}
