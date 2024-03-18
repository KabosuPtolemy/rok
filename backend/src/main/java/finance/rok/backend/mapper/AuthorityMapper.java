package finance.rok.backend.mapper;

import finance.rok.backend.dto.AuthorityDTO;
import finance.rok.backend.model.Authority;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
@AllArgsConstructor
public class AuthorityMapper {

    private ModelMapper mapper;

    public AuthorityDTO toDTO(Authority authority) {
        return mapper.map(authority, AuthorityDTO.class);
    }

    public Authority toEntity(AuthorityDTO authorityDTO) {
        return mapper.map(authorityDTO, Authority.class);
    }

    public List<Authority> toEntityList(List<AuthorityDTO> authorityDTOs) {
        return authorityDTOs.stream().map(this::toEntity).toList();
    }

    public List<AuthorityDTO> toDTOList(List<Authority> authorities) {
        return authorities.stream().map(this::toDTO).toList();
    }

}
