import { useState } from 'react';
import './App.css'
import { Header, TrustStats, CategoryTiles, InquiryModal, FloatingActionButton } from './components'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

          {/* Category Tiles Grid */}
          <CategoryTiles />
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
