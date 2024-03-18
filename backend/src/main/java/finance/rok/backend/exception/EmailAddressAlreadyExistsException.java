package finance.rok.backend.exception;

public class EmailAddressAlreadyExistsException extends RuntimeException {

    public EmailAddressAlreadyExistsException() {
        super("User with email address already exists!");
    }

}
