'use client'

import React from 'react'

export default function AddCategorias() {
  return (
    <div>
      <button
        type="button"
        className="btn-primary"
        onClick={() => {
          // placeholder: open a modal or navigate to add form
          // Implement UI as needed
          window.location.href = '/painel/categorias'
        }}
      >
        Adicionar Categoria
      </button>
    </div>
  )
}
