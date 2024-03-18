package finance.rok.backend.mapper;

import finance.rok.backend.dto.ProjectDTO;
import finance.rok.backend.model.Project;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class ProjectMapper {
    private ModelMapper modelMapper;

    public ProjectDTO toDTO(Project project) {
        return modelMapper.map(project, ProjectDTO.class);
    }

    public Project toEntity(ProjectDTO projectDTO) {
        return modelMapper.map(projectDTO, Project.class);
    }
}
