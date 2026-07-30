function AcercaDe() {
  const viñetas = [
    {
      titulo: 'Qué funciona',
      texto:
        'Fijar precio por kilo, registrar tambores con folio, apicultor y peso, cálculo automático del importe, congelamiento del precio histórico (cambiar el precio no afecta tambores anteriores), y validación de folio único con mensaje de error claro.',
    },
    {
      titulo: 'Qué está simulado',
      texto:
        'La persistencia de datos se simula con localStorage del navegador (no hay base de datos real). La figura del "administrador" que fija el precio no tiene autenticación ni roles; cualquiera que acceda al prototipo puede modificar el precio.',
    },
    {
      titulo: 'Qué está fuera de alcance',
      texto:
        'Multi-usuario concurrente, integración con sistemas contables o ERP, gestión de pagos y facturas, control de calidad/laboratorio, reportes avanzados, exportación a Excel/PDF, y notificaciones a apicultores.',
    },
    {
      titulo: 'Principal riesgo antes de producción',
      texto:
        'No existe backend ni base de datos real. Los datos viven en el navegador del usuario y pueden perderse al limpiar caché, cambiar de dispositivo o en fallos locales. No hay validación del lado servidor ni control de acceso.',
    },
    {
      titulo: 'Siguiente paso',
      texto:
        'Implementar un backend (Node.js, Python, etc.) con base de datos relacional (PostgreSQL o MySQL), autenticación de usuarios con roles, y una API REST que reemplace localStorage. Esto garantizará persistencia, concurrencia y seguridad.',
    },
  ]

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Acerca de este prototipo</h1>
      <div className="space-y-4">
        {viñetas.map((v, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
          >
            <h2 className="text-base font-semibold text-amber-800 mb-1">
              {i + 1}. {v.titulo}
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">{v.texto}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AcercaDe
