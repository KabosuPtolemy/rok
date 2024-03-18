package finance.rok.backend.repository;

import finance.rok.backend.model.Subscriber;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubscriberRepository extends MongoRepository<Subscriber, String> {

    List<Subscriber> findAllByProjectId(String projectId);

    Long countAllByProjectId(String projectId);
}
