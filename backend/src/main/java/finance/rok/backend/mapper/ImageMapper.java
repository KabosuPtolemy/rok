package finance.rok.backend.mapper;

import finance.rok.backend.dto.ImageDTO;
import finance.rok.backend.model.Image;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class ImageMapper {

    private ModelMapper mapper;

    public ImageDTO toDTO(Image image) {
        return mapper.map(image, ImageDTO.class);
    }

    public Image toEntity(ImageDTO imageDTO) {
        return mapper.map(imageDTO, Image.class);
    }
}
