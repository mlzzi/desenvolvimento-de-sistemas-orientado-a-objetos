'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { pessoaFisicaService, pessoaJuridicaService } from '@/app/services/api';
import { PessoaFisica, PessoaJuridica, TipoPessoa } from '@/types';

type DadosCombinados = {
  id: number;
  nome: string;
  documento: string;
  tipo: TipoPessoa;
  info: string;
  contato: string;
  dados: PessoaFisica | PessoaJuridica;
};

export default function Listagem() {
  const [dados, setDados] = useState<DadosCombinados[]>([]);
  const [dadosFiltrados, setDadosFiltrados] = useState<DadosCombinados[]>([]);
  const [filtro, setFiltro] = useState<TipoPessoa | 'TODOS'>('TODOS');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const carregarDados = async () => {
    try {
      setLoading(true);
      setError(null);

      const [pessoasFisicas, pessoasJuridicas] = await Promise.all([
        pessoaFisicaService.listarTodas(),
        pessoaJuridicaService.listarTodas()
      ]);

      const dadosFormatados: DadosCombinados[] = [
        ...pessoasFisicas.map(pessoa => ({
          id: pessoa.id!,
          nome: pessoa.nome,
          documento: pessoa.cpf,
          tipo: pessoa.tipo,
          info: pessoa.tipo === 'ALUNO' 
            ? `${pessoa.curso || 'N/A'} - ${pessoa.periodo || 'N/A'}º período`
            : `${pessoa.departamento || 'N/A'} - ${pessoa.titulacao || 'N/A'}`,
          contato: pessoa.email || pessoa.telefone || 'N/A',
          dados: pessoa
        })),
        ...pessoasJuridicas.map(pessoa => ({
          id: pessoa.id!,
          nome: pessoa.razaoSocial,
          documento: pessoa.cnpj,
          tipo: 'FORNECEDOR' as TipoPessoa,
          info: pessoa.areaFornecimento || 'N/A',
          contato: pessoa.email || pessoa.telefone || 'N/A',
          dados: pessoa
        }))
      ];

      setDados(dadosFormatados);
      setDadosFiltrados(dadosFormatados);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar dados');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarDados();
  }, []);

  useEffect(() => {
    if (filtro === 'TODOS') {
      setDadosFiltrados(dados);
    } else {
      setDadosFiltrados(dados.filter(item => item.tipo === filtro));
    }
  }, [filtro, dados]);

  const getTipoColor = (tipo: TipoPessoa) => {
    switch (tipo) {
      case 'ALUNO':
        return 'bg-blue-100 text-blue-800';
      case 'PROFESSOR':
        return 'bg-purple-100 text-purple-800';
      case 'FORNECEDOR':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const excluirItem = async (id: number, tipo: TipoPessoa) => {
    if (!confirm('Tem certeza que deseja excluir este registro?')) return;

    try {
      if (tipo === 'FORNECEDOR') {
        await pessoaJuridicaService.excluir(id);
      } else {
        await pessoaFisicaService.excluir(id);
      }
      await carregarDados();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Erro ao excluir registro');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando dados...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Voltar ao início
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Cadastros Realizados
          </h1>
          <p className="text-gray-600">
            Visualize e gerencie todos os cadastros
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-800 border border-red-200 rounded-md">
            {error}
          </div>
        )}

        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFiltro('TODOS')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filtro === 'TODOS'
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Todos ({dados.length})
              </button>
              <button
                onClick={() => setFiltro('ALUNO')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filtro === 'ALUNO'
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
              >
                Alunos ({dados.filter(d => d.tipo === 'ALUNO').length})
              </button>
              <button
                onClick={() => setFiltro('PROFESSOR')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filtro === 'PROFESSOR'
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }`}
              >
                Professores ({dados.filter(d => d.tipo === 'PROFESSOR').length})
              </button>
              <button
                onClick={() => setFiltro('FORNECEDOR')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filtro === 'FORNECEDOR'
                    ? 'bg-green-600 text-white'
                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                }`}
              >
                Fornecedores ({dados.filter(d => d.tipo === 'FORNECEDOR').length})
              </button>
            </div>
            
            <button
              onClick={carregarDados}
              className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              Atualizar
            </button>
          </div>
        </div>

        {/* Tabela */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {dadosFiltrados.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p className="text-lg mb-2">Nenhum registro encontrado</p>
              <p>Cadastre novos registros para visualizá-los aqui</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nome
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Documento
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tipo
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Informações
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contato
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {dadosFiltrados.map((item) => (
                    <tr key={`${item.tipo}-${item.id}`} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {item.nome}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.documento}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTipoColor(item.tipo)}`}>
                          {item.tipo}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.info}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.contato}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => excluirItem(item.id, item.tipo)}
                          className="text-red-600 hover:text-red-900 transition-colors"
                        >
                          Excluir
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
