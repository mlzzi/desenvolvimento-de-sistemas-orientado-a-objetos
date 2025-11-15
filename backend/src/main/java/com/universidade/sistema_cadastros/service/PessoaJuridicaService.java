package com.universidade.sistema_cadastros.service;

import com.universidade.sistema_cadastros.entity.PessoaJuridica;
import com.universidade.sistema_cadastros.repository.PessoaJuridicaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PessoaJuridicaService {
    
    private final PessoaJuridicaRepository repository;
    
    public List<PessoaJuridica> findAll() {
        return repository.findAll();
    }
    
    public Optional<PessoaJuridica> findById(Long id) {
        return repository.findById(id);
    }
    
    public PessoaJuridica save(PessoaJuridica pessoa) {
        if (repository.existsByCnpj(pessoa.getCnpj())) {
            throw new RuntimeException("CNPJ já cadastrado: " + pessoa.getCnpj());
        }
        
        if (pessoa.getEmail() != null && repository.existsByEmail(pessoa.getEmail())) {
            throw new RuntimeException("Email já cadastrado: " + pessoa.getEmail());
        }
        
        return repository.save(pessoa);
    }
    
    public PessoaJuridica update(Long id, PessoaJuridica pessoa) {
        return repository.findById(id)
                .map(existing -> {
                    pessoa.setId(id);
                    return repository.save(pessoa);
                })
                .orElseThrow(() -> new RuntimeException("Pessoa Jurídica não encontrada com ID: " + id));
    }
    
    public void deleteById(Long id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Pessoa Jurídica não encontrada com ID: " + id);
        }
        repository.deleteById(id);
    }
}
