package finance.rok.backend.service;

import finance.rok.backend.dto.ImageDTO;
import finance.rok.backend.mapper.ImageMapper;
import finance.rok.backend.repository.ImageRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ImageServiceImpl implements ImageService {

    private final ImageRepository imageRepository;
    private final ImageMapper imageMapper;


    @Override
    public List<ImageDTO> getAllByProjectId(String projectId) {
        return imageRepository.findAllByProjectId(projectId).stream().map(imageMapper::toDTO).toList();
    }

}
