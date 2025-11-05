'use client'

import React from 'react'

export default function EditCategoria({ categoria }: { categoria: { id: string; nome: string } }) {
  return (
    <button
      type="button"
      className="btn-ghost"
      onClick={() => {
        // placeholder: open edit UI
        window.location.href = '/painel/categorias'
      }}
    >
      Editar
    </button>
  )
}
