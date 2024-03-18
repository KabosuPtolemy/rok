package finance.rok.backend.service;

import finance.rok.backend.dto.SubscriberDTO;
import java.util.List;

public interface SubscriberService {

    List<SubscriberDTO> getAllByProjectId(String projectId);

    Long countAllByProjectId(String projectId);

}
