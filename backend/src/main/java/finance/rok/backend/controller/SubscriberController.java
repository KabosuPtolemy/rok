package finance.rok.backend.controller;

import finance.rok.backend.dto.SubscriberDTO;
import finance.rok.backend.service.SubscriberService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/subscriber")
@AllArgsConstructor
public class SubscriberController {

    private final SubscriberService subscriberService;

    @GetMapping("/{projectId}")
    public List<SubscriberDTO> getAllByProjectId(@PathVariable("projectId") String projectId) {
        return subscriberService.getAllByProjectId(projectId);
    }

    @GetMapping("/{projectId}/count")
    public ResponseEntity<Long> countAllByProjectId(@PathVariable("projectId") String projectId) {
        Long count = subscriberService.countAllByProjectId(projectId);
        return new ResponseEntity<>(count, HttpStatus.OK);
    }
}
