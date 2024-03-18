package finance.rok.backend.repository;

import finance.rok.backend.model.Project;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ProjectRepository extends MongoRepository<Project, String> {

    List<Project> findAllBy(Pageable pageable);

}
