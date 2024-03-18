package finance.rok.backend.service;

import finance.rok.backend.dto.ProjectDTO;
import finance.rok.backend.mapper.ProjectMapper;
import finance.rok.backend.model.Project;
import finance.rok.backend.repository.ProjectRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepository;
    private final ProjectMapper projectMapper;

    @Override
    public ProjectDTO getProjectById(String id) {
        Optional<Project> optionalProject = projectRepository.findById(id);
        if (optionalProject.isPresent()) {
            return projectMapper.toDTO(optionalProject.get());
        } else {
            throw new RuntimeException("Project with id " + id + "does not exist");
        }
    }

    @Override
    public List<ProjectDTO> getProjectsByPage(Pageable pageable) {
        return projectRepository.findAllBy(pageable).stream().map(projectMapper::toDTO).toList();
    }

    @Override
    public List<ProjectDTO> getAllProjects() {
        return projectRepository.findAll().stream().map(projectMapper::toDTO).toList();
    }

    @Override
    public ProjectDTO saveProject(ProjectDTO projectDTO) {
        // TODO: Fetch chain

        Project project = projectMapper.toEntity(projectDTO);
        project.setId(null);
        project.setCreated(System.currentTimeMillis());
        project.setKyc(false);
        // TODO: Save chain
        project = projectRepository.save(project);
        return projectMapper.toDTO(project);
    }

    @Override
    public ProjectDTO updateProject(String id, ProjectDTO projectDTO) {
        Optional<Project> optionalProject = projectRepository.findById(id);
        if (optionalProject.isPresent()) {
            projectDTO.setId(id);
            projectDTO.setChanged(new Timestamp(System.currentTimeMillis()));
            projectRepository.save(projectMapper.toEntity(projectDTO));
            return projectDTO;
        } else {
            throw new RuntimeException("No project with id " + id + "found");
        }
    }

    @Override
    public void deleteProject(String id) {
        Optional<Project> optionalProject = projectRepository.findById(id);
        if (optionalProject.isPresent()) {
            projectRepository.delete(optionalProject.get());
        } else {
            throw new RuntimeException("No project with id " + id + "found");
        }
    }

}
