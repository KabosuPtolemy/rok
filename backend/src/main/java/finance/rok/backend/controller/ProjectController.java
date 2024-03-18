package finance.rok.backend.controller;

import finance.rok.backend.dto.ProjectDTO;
import finance.rok.backend.service.ProjectService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/project")
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping
    public List<ProjectDTO> getAllProjectsStream(@RequestParam(value = "page", required = false) Integer page) {
        Pageable pageable = PageRequest.of(page == null ?  0 : page, 10, Sort.by("created").descending());
        return projectService.getProjectsByPage(pageable);
    }

    @GetMapping("/{id}")
    public ProjectDTO getProjectById(@PathVariable("id") String id) {
        return projectService.getProjectById(id);
    }

    @PutMapping
    public ResponseEntity<ProjectDTO> saveProject(@Valid @RequestBody ProjectDTO project) {
        ProjectDTO projectDTO = projectService.saveProject(project);
        return new ResponseEntity<>(projectDTO, HttpStatus.CREATED);
    }

    @PostMapping("/{id}")
    public ResponseEntity<ProjectDTO> updateProject(@PathVariable String id, @RequestBody ProjectDTO project) {
        ProjectDTO projectDTO = projectService.updateProject(id, project);
        return new ResponseEntity<>(projectDTO, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable String id) {
        projectService.deleteProject(id);
    }

}
