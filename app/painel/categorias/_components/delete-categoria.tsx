'use client'

import React from 'react'

export default function DeleteCategoria({ categoria }: { categoria: { id: string; nome: string } }) {
  return (
    <button
      type="button"
      className="btn-danger"
      onClick={() => {
        // placeholder: call delete action or confirm
        if (confirm(`Excluir a categoria "${categoria.nome}"?`)) {
          window.location.href = '/painel/categorias'
        }
      }}
    >
      Excluir
    </button>
  )
}
