package finance.rok.backend.repository;

import finance.rok.backend.model.ConfirmationToken;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface ConfirmationTokenRepository extends MongoRepository<ConfirmationToken, String> {

    Optional<ConfirmationToken> findByToken(String token);

    void deleteByToken(String token);

}
