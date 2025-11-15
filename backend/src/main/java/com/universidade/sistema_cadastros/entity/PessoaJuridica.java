package com.universidade.sistema_cadastros.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "pessoa_juridica")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PessoaJuridica {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "Razão social é obrigatória")
    @Size(max = 150, message = "Razão social deve ter no máximo 150 caracteres")
    @Column(nullable = false)
    private String razaoSocial;
    
    @NotBlank(message = "CNPJ é obrigatório")
    @Size(min = 14, max = 14, message = "CNPJ deve ter 14 dígitos")
    @Column(nullable = false, unique = true)
    private String cnpj;
    
    private String endereco;
    private String telefone;
    
    @Email(message = "Email deve ter formato válido")
    private String email;
    
    // Campos específicos para Fornecedor
    private String contato;
    private String telefoneContato;
    private String areaFornecimento;
}
