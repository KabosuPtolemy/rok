package finance.rok.backend.mapper;

import finance.rok.backend.dto.SubscriberDTO;
import finance.rok.backend.model.Subscriber;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class SubscriberMapper {

    private ModelMapper mapper;

    public SubscriberDTO toDTO(Subscriber subscriber) {
        return mapper.map(subscriber, SubscriberDTO.class);
    }

    public Subscriber toEntity(SubscriberDTO subscriberDTO) {
        return mapper.map(subscriberDTO, Subscriber.class);
    }
}
