package finance.rok.backend.service;

import finance.rok.backend.dto.ProjectDTO;
import org.springframework.data.domain.Pageable;
import java.util.List;

public interface ProjectService {

    ProjectDTO getProjectById(String id);

    List<ProjectDTO> getProjectsByPage(Pageable pageable);

    List<ProjectDTO> getAllProjects();

    ProjectDTO saveProject(ProjectDTO projectDTO);

    ProjectDTO updateProject(String id, ProjectDTO projectDTO);

    void deleteProject(String id);
}
