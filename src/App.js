import './App.css';
import { Navbar } from './components/Navbar';
import { Router } from './router';
import './styles/index.css'

function App() {
  return (
    <div className="App">
      <div class="bg-circles">
        <div class="circle-1"></div>
        <div class="circle-2"></div>
        <div class="circle-3"></div>
        <div class="circle-4"></div>
    </div>
    <Router />
    </div>
  );
}

export default App;
