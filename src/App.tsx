import './App.css'
import { Header, TrustStats } from './components'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <div className="container">
          {/* Hero Section */}
          <section className="section my-12">
            <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface max-w-2xl leading-tight">
              Have an award-winning insurer by your side
            </h1>
          </section>

          {/* Trust Stats Grid */}
          <TrustStats />

          {/* Placeholder for next sections */}
          <section className="section my-16 p-8 bg-surface-container rounded-card text-center">
            <p className="text-body-lg text-on-surface-variant">
              More components coming soon...
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
