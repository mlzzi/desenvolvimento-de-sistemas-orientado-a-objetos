const API_BASE_URL = 'http://localhost:8080/api';

const apiConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

async function apiRequest<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...apiConfig,
    ...options,
    headers: {
      ...apiConfig.headers,
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `HTTP error! status: ${response.status}`);
  }

  return response.json();
}

// Serviços para Pessoa Física
export const pessoaFisicaService = {
  listarTodas: () => apiRequest<PessoaFisica[]>('/pessoas-fisicas'),
  listarAlunos: () => apiRequest<PessoaFisica[]>('/pessoas-fisicas/alunos'),
  listarProfessores: () => apiRequest<PessoaFisica[]>('/pessoas-fisicas/professores'),
  buscarPorId: (id: number) => apiRequest<PessoaFisica>(`/pessoas-fisicas/${id}`),
  criar: (pessoa: Omit<PessoaFisica, 'id'>) => 
    apiRequest<PessoaFisica>('/pessoas-fisicas', {
      method: 'POST',
      body: JSON.stringify(pessoa),
    }),
  atualizar: (id: number, pessoa: Omit<PessoaFisica, 'id'>) =>
    apiRequest<PessoaFisica>(`/pessoas-fisicas/${id}`, {
      method: 'PUT',
      body: JSON.stringify(pessoa),
    }),
  excluir: (id: number) =>
    apiRequest<void>(`/pessoas-fisicas/${id}`, {
      method: 'DELETE',
    }),
};

// Serviços para Pessoa Jurídica
export const pessoaJuridicaService = {
  listarTodas: () => apiRequest<PessoaJuridica[]>('/pessoas-juridicas'),
  buscarPorId: (id: number) => apiRequest<PessoaJuridica>(`/pessoas-juridicas/${id}`),
  criar: (pessoa: Omit<PessoaJuridica, 'id'>) =>
    apiRequest<PessoaJuridica>('/pessoas-juridicas', {
      method: 'POST',
      body: JSON.stringify(pessoa),
    }),
  atualizar: (id: number, pessoa: Omit<PessoaJuridica, 'id'>) =>
    apiRequest<PessoaJuridica>(`/pessoas-juridicas/${id}`, {
      method: 'PUT',
      body: JSON.stringify(pessoa),
    }),
  excluir: (id: number) =>
    apiRequest<void>(`/pessoas-juridicas/${id}`, {
      method: 'DELETE',
    }),
};

// Importar tipos
import { PessoaFisica, PessoaJuridica } from '@/types';
