package com.universidade.sistema_cadastros.repository;

import com.universidade.sistema_cadastros.entity.PessoaJuridica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PessoaJuridicaRepository extends JpaRepository<PessoaJuridica, Long> {
    boolean existsByCnpj(String cnpj);
    boolean existsByEmail(String email);
    Optional<PessoaJuridica> findByCnpj(String cnpj);
}
