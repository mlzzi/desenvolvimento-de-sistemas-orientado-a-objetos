package com.universidade.sistema_cadastros.service;

import com.universidade.sistema_cadastros.entity.PessoaFisica;
import com.universidade.sistema_cadastros.entity.TipoPessoa;
import com.universidade.sistema_cadastros.repository.PessoaFisicaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PessoaFisicaService {
    
    private final PessoaFisicaRepository repository;
    
    public List<PessoaFisica> findAll() {
        return repository.findAll();
    }
    
    public List<PessoaFisica> findByTipo(TipoPessoa tipo) {
        return repository.findByTipo(tipo);
    }
    
    public Optional<PessoaFisica> findById(Long id) {
        return repository.findById(id);
    }
    
    public PessoaFisica save(PessoaFisica pessoa) {
        // Validações básicas
        if (repository.existsByCpf(pessoa.getCpf())) {
            throw new RuntimeException("CPF já cadastrado: " + pessoa.getCpf());
        }
        
        if (pessoa.getEmail() != null && repository.existsByEmail(pessoa.getEmail())) {
            throw new RuntimeException("Email já cadastrado: " + pessoa.getEmail());
        }
        
        // Validações específicas por tipo
        if (pessoa.getTipo() == TipoPessoa.ALUNO) {
            if (pessoa.getRa() != null && repository.existsByRa(pessoa.getRa())) {
                throw new RuntimeException("RA já cadastrado: " + pessoa.getRa());
            }
        } else if (pessoa.getTipo() == TipoPessoa.PROFESSOR) {
            if (pessoa.getMatricula() != null && repository.existsByMatricula(pessoa.getMatricula())) {
                throw new RuntimeException("Matrícula já cadastrada: " + pessoa.getMatricula());
            }
        }
        
        return repository.save(pessoa);
    }
    
    public PessoaFisica update(Long id, PessoaFisica pessoa) {
        return repository.findById(id)
                .map(existing -> {
                    pessoa.setId(id);
                    return repository.save(pessoa);
                })
                .orElseThrow(() -> new RuntimeException("Pessoa não encontrada com ID: " + id));
    }
    
    public void deleteById(Long id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Pessoa não encontrada com ID: " + id);
        }
        repository.deleteById(id);
    }
}
