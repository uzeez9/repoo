import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Features from './components/Features';
import Terms from './components/Terms';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Features />
      <Terms />
    </div>
  );
}

export default App;