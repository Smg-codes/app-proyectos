import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Proyectos from './components/Proyectos';

function App() {
  return (
    <>
    <Navbar />
    <div className="animate__animated animate__fadeInRight m-3">
      <Proyectos />
    </div>
    </>
  );
}

export default App;
