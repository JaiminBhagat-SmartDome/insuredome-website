import './App.css'
import { Header } from './components/Header'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        {/* Main content will be added in subsequent tasks */}
        <div className="text-center py-12">
          <h2 className="text-display-lg-mobile md:text-display-lg text-on-surface mb-4">
            Welcome to Insure Dome
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            Building your protection layer...
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
