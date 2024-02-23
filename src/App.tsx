import './App.css';
import { UI } from './components/UI';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <UI/>

      <Footer/>
    </div>
  );
}

export default App