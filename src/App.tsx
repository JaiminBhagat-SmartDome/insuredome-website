import { useState } from 'react';
import './App.css'
import { Header, TrustStats, CategoryTiles, InquiryModal, FloatingActionButton } from './components'
import { useLangQueryParam } from './hooks/useLangQueryParam'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Handle dynamic lang query parameter and auto-scroll
  useLangQueryParam();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <div className="container">
          {/* Hero Section */}
          <section id="hero" className="section my-12">
            <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface max-w-2xl leading-tight">
              Experienced Insurance Advisor
            </h1>
          </section>

          {/* Trust Stats Grid */}
          <section id="stats">
            <TrustStats />
          </section>

          {/* Category Tiles Grid */}
          <section id="products">
            <CategoryTiles />
          </section>
        </div>
      </main>

      {/* Inquiry Modal */}
      <InquiryModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Floating Action Button */}
      <FloatingActionButton onClick={openModal} />
    </div>
  )
}

export default App
