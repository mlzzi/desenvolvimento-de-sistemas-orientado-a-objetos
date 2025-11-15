package com.universidade.sistema_cadastros.controller;

import com.universidade.sistema_cadastros.entity.PessoaJuridica;
import com.universidade.sistema_cadastros.service.PessoaJuridicaService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pessoas-juridicas")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class PessoaJuridicaController {
    
    private final PessoaJuridicaService service;
    
    @GetMapping
    public ResponseEntity<List<PessoaJuridica>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<PessoaJuridica> findById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody PessoaJuridica pessoa) {
        try {
            PessoaJuridica saved = service.save(pessoa);
            return ResponseEntity.status(HttpStatus.CREATED).body(saved);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @Valid @RequestBody PessoaJuridica pessoa) {
        try {
            PessoaJuridica updated = service.update(id, pessoa);
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
