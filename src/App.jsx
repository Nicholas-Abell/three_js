import { useState } from 'react';
import Canvas from './canvas/index';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {

  return (
    <main className='transition-all ease-in px-24 py-12'>
      <h1 className='text-4xl'>ThreeJS</h1>
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App