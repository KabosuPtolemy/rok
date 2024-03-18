package finance.rok.backend.controller;

import finance.rok.backend.dto.ChainDTO;
import finance.rok.backend.service.ChainService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/chain")
@AllArgsConstructor
public class ChainController {

    private final ChainService chainService;

    @GetMapping("/{chainId}")
    public ResponseEntity<ChainDTO> getChainById(@PathVariable("chainId") String chainId) {
        ChainDTO chainDTO = chainService.getChainById(chainId);
        return new ResponseEntity<>(chainDTO, HttpStatus.OK);
    }

}
