package finance.rok.backend.service;

import finance.rok.backend.dto.SubscriberDTO;
import finance.rok.backend.mapper.SubscriberMapper;
import finance.rok.backend.repository.SubscriberRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@AllArgsConstructor
public class SubscriberServiceImpl implements SubscriberService {

    private final SubscriberRepository subscriberRepository;
    private final SubscriberMapper subscriberMapper;

    @Override
    public List<SubscriberDTO> getAllByProjectId(String projectId) {
        return subscriberRepository.findAllByProjectId(projectId).stream().map(subscriberMapper::toDTO).toList();
    }

    @Override
    public Long countAllByProjectId(String projectId) {
        return subscriberRepository.countAllByProjectId(projectId);
    }
}
