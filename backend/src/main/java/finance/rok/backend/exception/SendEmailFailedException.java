package finance.rok.backend.exception;

public class SendEmailFailedException extends RuntimeException {

    public SendEmailFailedException() {
        super("Something went wrong. Could not send email.");
    }
}
