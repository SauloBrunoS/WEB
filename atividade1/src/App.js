import './App.css';

import Arena from './components/Arena'
import World from './components/World'
import Hero from './components/Hero'
import Enemy from './components/Enemy'

function App() {
  return (
    <div className="App">
      <World>
        <Arena arena="Tokio Dome Underground Arena">
          <Hero name="Baki" />
          <Enemy name="Yujiro" />
        </Arena>
        <Arena arena="Arena de Cápua – Itália">
          <Hero name="Batman" />
          <Enemy name="Coringa" />
        </Arena>
        <Arena arena="Arena de Arles – França">
          <Hero name="Thor" />
          <Enemy name="Loki" />
        </Arena>
      </World>
    </div>
  );
}

export default App;
