package finance.rok.backend.controller;

import finance.rok.backend.dto.ImageDTO;
import finance.rok.backend.service.ImageService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/image")
@AllArgsConstructor
public class ImageController {

    private final ImageService imageService;

    @GetMapping("/{projectId}")
    public List<ImageDTO> getAllByProjectId(@PathVariable("projectId") String projectId) {
        return imageService.getAllByProjectId(projectId);
    }
}
