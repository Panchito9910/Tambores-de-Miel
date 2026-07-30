function DrumTable({ tambores }) {
  if (tambores.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm text-center">
        <p className="text-gray-500">No hay tambores registrados aún.</p>
      </div>
    )
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <h2 className="text-lg font-semibold text-gray-800 p-6 pb-2">
        Tambores registrados
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-amber-100 text-amber-900 border-b border-amber-200">
            <tr>
              <th className="px-4 py-3 font-semibold">Folio</th>
              <th className="px-4 py-3 font-semibold">Apicultor</th>
              <th className="px-4 py-3 font-semibold text-right">Peso (kg)</th>
              <th className="px-4 py-3 font-semibold text-right">Precio/kg</th>
              <th className="px-4 py-3 font-semibold text-right">Importe</th>
              <th className="px-4 py-3 font-semibold">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {tambores.map((t, i) => (
              <tr
                key={t.folio}
                className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <td className="px-4 py-3 font-medium text-gray-900">{t.folio}</td>
                <td className="px-4 py-3 text-gray-700">{t.apicultor}</td>
                <td className="px-4 py-3 text-right text-gray-700">{t.peso.toFixed(2)}</td>
                <td className="px-4 py-3 text-right text-gray-700">${t.precioUnitario.toFixed(2)}</td>
                <td className="px-4 py-3 text-right font-bold text-amber-800">
                  ${t.importe.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-gray-500 text-xs">{t.fecha}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-amber-50 border-t border-amber-200">
            <tr>
              <td colSpan={2} className="px-4 py-3 font-semibold text-amber-900">Total</td>
              <td className="px-4 py-3 text-right font-semibold text-amber-900">
                {tambores.reduce((acc, t) => acc + t.peso, 0).toFixed(2)}
              </td>
              <td></td>
              <td className="px-4 py-3 text-right font-bold text-amber-900">
                ${tambores.reduce((acc, t) => acc + t.importe, 0).toFixed(2)}
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default DrumTable
