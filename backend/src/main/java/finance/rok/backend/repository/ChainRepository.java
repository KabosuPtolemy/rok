package finance.rok.backend.repository;

import finance.rok.backend.model.Chain;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChainRepository extends MongoRepository<Chain, String> {

}
