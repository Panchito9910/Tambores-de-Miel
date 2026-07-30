import useLocalStorage from '../hooks/useLocalStorage'
import PriceManager from '../components/PriceManager'
import DrumForm from '../components/DrumForm'
import DrumTable from '../components/DrumTable'

function Operaciones() {
  const [precioActual, setPrecioActual] = useLocalStorage('precioActual', 0)
  const [tambores, setTambores] = useLocalStorage('tambores', [])

  const handleRegister = ({ folio, apicultor, peso }) => {
    if (tambores.some((t) => t.folio.toLowerCase() === folio.toLowerCase())) {
      alert(`Error: el folio "${folio}" ya está registrado. No se permiten folios duplicados.`)
      return
    }
    if (precioActual <= 0) {
      alert('Debe fijar un precio por kilo antes de registrar un tambor.')
      return
    }
    const nuevoTambor = {
      folio,
      apicultor,
      peso,
      precioUnitario: precioActual,
      importe: peso * precioActual,
      fecha: new Date().toLocaleString('es-MX'),
    }
    setTambores([...tambores, nuevoTambor])
  }

  return (
    <div className="space-y-8">
      <PriceManager precioActual={precioActual} onSetPrice={setPrecioActual} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <DrumForm precioActual={precioActual} onRegister={handleRegister} />
        <div className="space-y-6">
          <DrumTable tambores={tambores} />
        </div>
      </div>
    </div>
  )
}

export default Operaciones
