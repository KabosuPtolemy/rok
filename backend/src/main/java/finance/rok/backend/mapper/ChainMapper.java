package finance.rok.backend.mapper;

import finance.rok.backend.dto.ChainDTO;
import finance.rok.backend.model.Chain;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class ChainMapper {

    private ModelMapper mapper;

    public Chain toEntity(ChainDTO chainDTO) {
        return mapper.map(chainDTO, Chain.class);
    }

    public ChainDTO toDTO(Chain chain) {
        return mapper.map(chain, ChainDTO.class);
    }
}
