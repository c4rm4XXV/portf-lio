import Navbar from './componentes/section/Navbar'
import './App.css';
import Presentation from './componentes/section/Presentation';
import Skills from './componentes/section/Skills';
import Footer from './componentes/section/Footer';
import Projects from './componentes/section/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
