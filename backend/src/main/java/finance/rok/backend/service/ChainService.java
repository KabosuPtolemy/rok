package finance.rok.backend.service;

import finance.rok.backend.dto.ChainDTO;
import java.util.List;

public interface ChainService {

    ChainDTO getChainById(String id);

    List<ChainDTO> getAllChains();
}
