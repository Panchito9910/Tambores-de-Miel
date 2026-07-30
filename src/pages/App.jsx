import { Link, Outlet, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()

  const navLink = (path, label) => {
    const isActive = location.pathname === path
    return (
      <Link
        to={path}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive
            ? 'bg-amber-700 text-white'
            : 'text-amber-100 hover:bg-amber-600 hover:text-white'
        }`}
      >
        {label}
      </Link>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-amber-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 gap-3">
            <h1 className="text-xl font-bold text-white tracking-tight">
              Tambores de Miel
            </h1>
            <nav className="flex gap-2">
              {navLink('/', 'Inicio')}
              {navLink('/acerca-de', 'Acerca de')}
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <footer className="bg-amber-900 text-amber-200 text-center text-xs py-4 mt-8">
        Prototipo — Tambores de Miel &copy; {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default App
