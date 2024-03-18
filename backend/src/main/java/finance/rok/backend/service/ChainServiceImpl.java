package finance.rok.backend.service;

import finance.rok.backend.dto.ChainDTO;
import finance.rok.backend.mapper.ChainMapper;
import finance.rok.backend.model.Chain;
import finance.rok.backend.repository.ChainRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ChainServiceImpl implements ChainService {
    private final ChainRepository chainRepository;
    private final ChainMapper chainMapper;

    @Override
    public ChainDTO getChainById(String id) {
        Optional<Chain> optionalChain = chainRepository.findById(id);
        if (optionalChain.isPresent()) {
            return chainMapper.toDTO(optionalChain.get());
        } else {
            throw new RuntimeException("Chan with Id " + id + " not found.");
        }
    }

    @Override
    public List<ChainDTO> getAllChains() {
        return chainRepository.findAll().stream().map(chainMapper::toDTO).toList();
    }
}
