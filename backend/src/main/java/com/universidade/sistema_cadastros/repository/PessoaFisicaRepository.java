package com.universidade.sistema_cadastros.repository;

import com.universidade.sistema_cadastros.entity.PessoaFisica;
import com.universidade.sistema_cadastros.entity.TipoPessoa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PessoaFisicaRepository extends JpaRepository<PessoaFisica, Long> {
    boolean existsByCpf(String cpf);
    boolean existsByEmail(String email);
    boolean existsByRa(String ra);
    boolean existsByMatricula(String matricula);
    
    Optional<PessoaFisica> findByCpf(String cpf);
    Optional<PessoaFisica> findByRa(String ra);
    Optional<PessoaFisica> findByMatricula(String matricula);
    
    List<PessoaFisica> findByTipo(TipoPessoa tipo);
}
