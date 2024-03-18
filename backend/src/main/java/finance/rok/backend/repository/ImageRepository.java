package finance.rok.backend.repository;

import finance.rok.backend.model.Image;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImageRepository extends MongoRepository<Image, String> {

    List<Image> findAllByProjectId(String projectId);

}
