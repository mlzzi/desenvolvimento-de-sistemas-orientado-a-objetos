import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sistema de Cadastros',
  description: 'Sistema para cadastro de pessoas físicas, jurídicas, professores, fornecedores e alunos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto">
              <h1 className="text-2xl font-bold">Sistema de Cadastros</h1>
            </div>
          </nav>
          <main className="container mx-auto py-8 px-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
