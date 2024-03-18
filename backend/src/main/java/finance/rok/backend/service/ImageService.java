package finance.rok.backend.service;

import finance.rok.backend.dto.ImageDTO;
import java.util.List;

public interface ImageService {

    List<ImageDTO> getAllByProjectId(String projectId);

}
