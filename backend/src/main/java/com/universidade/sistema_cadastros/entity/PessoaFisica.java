package com.universidade.sistema_cadastros.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "pessoa_fisica")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PessoaFisica {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "Nome é obrigatório")
    @Size(max = 100, message = "Nome deve ter no máximo 100 caracteres")
    @Column(nullable = false)
    private String nome;
    
    @NotBlank(message = "CPF é obrigatório")
    @Size(min = 11, max = 11, message = "CPF deve ter 11 dígitos")
    @Column(nullable = false, unique = true)
    private String cpf;
    
    @Column(name = "data_nascimento")
    private LocalDate dataNascimento;
    
    private String endereco;
    private String telefone;
    
    @Email(message = "Email deve ter formato válido")
    private String email;
    
    // Campos específicos para definir o tipo
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TipoPessoa tipo; // ALUNO ou PROFESSOR
    
    // Campos específicos para Aluno
    private String ra; // Registro Acadêmico
    private String curso;
    private Integer periodo;
    
    // Campos específicos para Professor
    private String matricula;
    private String departamento;
    private String especialidade;
    private String titulacao;
}
