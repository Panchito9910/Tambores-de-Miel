import { useState } from 'react'

function PriceManager({ precioActual, onSetPrice }) {
  const [input, setInput] = useState(String(precioActual))
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    const value = parseFloat(input)
    if (isNaN(value) || value <= 0) {
      alert('El precio debe ser un número mayor a 0.')
      return
    }
    onSetPrice(value)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-amber-900 mb-4">
        Precio por kilo
      </h2>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-700 font-medium">$</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full pl-8 pr-4 py-2.5 border border-amber-300 rounded-md
                       focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent
                       text-amber-900 bg-white"
            placeholder="Precio por kilo"
          />
        </div>
        <button
          onClick={handleSave}
          className="px-6 py-2.5 bg-amber-600 text-white font-medium rounded-md
                     hover:bg-amber-700 active:bg-amber-800 transition-colors
                     focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        >
          Fijar precio
        </button>
      </div>
      {saved && (
        <p className="mt-2 text-sm text-green-700 font-medium">
          Precio actualizado correctamente.
        </p>
      )}
      <p className="mt-3 text-sm text-amber-700">
        Precio vigente: <span className="font-bold">${precioActual.toFixed(2)} MXN/kg</span>
      </p>
    </div>
  )
}

export default PriceManager
