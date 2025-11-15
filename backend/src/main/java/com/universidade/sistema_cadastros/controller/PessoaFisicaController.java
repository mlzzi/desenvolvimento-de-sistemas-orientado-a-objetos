package com.universidade.sistema_cadastros.controller;

import com.universidade.sistema_cadastros.entity.PessoaFisica;
import com.universidade.sistema_cadastros.entity.TipoPessoa;
import com.universidade.sistema_cadastros.service.PessoaFisicaService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pessoas-fisicas")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class PessoaFisicaController {
    
    private final PessoaFisicaService service;
    
    @GetMapping
    public ResponseEntity<List<PessoaFisica>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }
    
    @GetMapping("/alunos")
    public ResponseEntity<List<PessoaFisica>> findAlunos() {
        return ResponseEntity.ok(service.findByTipo(TipoPessoa.ALUNO));
    }
    
    @GetMapping("/professores")
    public ResponseEntity<List<PessoaFisica>> findProfessores() {
        return ResponseEntity.ok(service.findByTipo(TipoPessoa.PROFESSOR));
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<PessoaFisica> findById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody PessoaFisica pessoa) {
        try {
            PessoaFisica saved = service.save(pessoa);
            return ResponseEntity.status(HttpStatus.CREATED).body(saved);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @Valid @RequestBody PessoaFisica pessoa) {
        try {
            PessoaFisica updated = service.update(id, pessoa);
            return ResponseEntity.ok(updated);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        try {
            service.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
