import { useState } from 'react'

function DrumForm({ precioActual, onRegister }) {
  const [folio, setFolio] = useState('')
  const [apicultor, setApicultor] = useState('')
  const [peso, setPeso] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!folio.trim()) {
      setError('El folio es obligatorio.')
      return
    }
    if (!apicultor.trim()) {
      setError('El nombre del apicultor es obligatorio.')
      return
    }
    const pesoNum = parseFloat(peso)
    if (isNaN(pesoNum) || pesoNum <= 0) {
      setError('El peso debe ser un número mayor a 0.')
      return
    }

    onRegister({
      folio: folio.trim(),
      apicultor: apicultor.trim(),
      peso: pesoNum,
    })
    setFolio('')
    setApicultor('')
    setPeso('')
  }

  const importePreview = parseFloat(peso) > 0
    ? (parseFloat(peso) * precioActual).toFixed(2)
    : null

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Registrar tambor
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="folio" className="block text-sm font-medium text-gray-700 mb-1">
            Folio
          </label>
          <input
            id="folio"
            type="text"
            value={folio}
            onChange={(e) => setFolio(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md
                       focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="Ej. T-001"
          />
        </div>
        <div>
          <label htmlFor="apicultor" className="block text-sm font-medium text-gray-700 mb-1">
            Apicultor
          </label>
          <input
            id="apicultor"
            type="text"
            value={apicultor}
            onChange={(e) => setApicultor(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md
                       focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="Nombre del apicultor"
          />
        </div>
        <div>
          <label htmlFor="peso" className="block text-sm font-medium text-gray-700 mb-1">
            Peso (kg)
          </label>
          <input
            id="peso"
            type="number"
            min="0"
            step="0.01"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md
                       focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="Peso en kilogramos"
          />
        </div>

        {importePreview && (
          <div className="bg-amber-50 border border-amber-200 rounded-md p-3">
            <p className="text-sm text-amber-800">
              Importe estimado:{' '}
              <span className="font-bold text-amber-900">${importePreview} MXN</span>
            </p>
            <p className="text-xs text-amber-600 mt-1">
              ({peso} kg × ${precioActual.toFixed(2)}/kg)
            </p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-300 rounded-md p-3">
            <p className="text-sm text-red-800 font-medium">{error}</p>
          </div>
        )}

        <button
          type="submit"
          className="w-full px-6 py-2.5 bg-amber-600 text-white font-medium rounded-md
                     hover:bg-amber-700 active:bg-amber-800 transition-colors
                     focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        >
          Registrar tambor
        </button>
      </form>
    </div>
  )
}

export default DrumForm
