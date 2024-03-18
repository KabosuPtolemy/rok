package finance.rok.backend.mapper;

import finance.rok.backend.dto.UserDTO;
import finance.rok.backend.model.User;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class UserMapper {

    private ModelMapper mapper;

    public UserDTO toDTO(User user) {
        mapper = new ModelMapper();
        TypeMap<User, UserDTO> propertyMapper = mapper.createTypeMap(User.class, UserDTO.class);
        propertyMapper.addMappings(m -> m.skip(UserDTO::setPassword));
        return propertyMapper.map(user);
    }

    public User toEntity(UserDTO userDTO) {
        return mapper.map(userDTO, User.class);
    }
}
