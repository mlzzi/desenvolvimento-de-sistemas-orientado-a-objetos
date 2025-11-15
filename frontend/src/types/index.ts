// Tipos que correspondem ao backend
export interface PessoaFisica {
  id?: number;
  nome: string;
  cpf: string;
  dataNascimento?: string | null;
  endereco?: string | null;
  telefone?: string | null;
  email?: string | null;
  // Campo obrigatório no backend
  tipo: 'ALUNO' | 'PROFESSOR';
  // Campos específicos para Aluno
  ra?: string;
  curso?: string;
  periodo?: number;
  // Campos específicos para Professor
  matricula?: string;
  departamento?: string;
  especialidade?: string;
  titulacao?: string;
}

export interface PessoaJuridica {
  id?: number;
  razaoSocial: string;
  cnpj: string;
  endereco?: string | null;
  telefone?: string | null;
  email?: string | null;
  // Campos específicos para fornecedor
  contato?: string;
  telefoneContato?: string;
  areaFornecimento?: string;
}

export type TipoPessoa = 'ALUNO' | 'PROFESSOR' | 'FORNECEDOR';
