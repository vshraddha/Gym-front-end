import './App.css';
import Hero from './Components/Hero';
import Program from './Components/Program';
import Reasons from'./Components/Reasons';
import Plan from "./Components/Plan";
import Testimonial from './Components/Testimonial';
import Join from './Components/Join';
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
          <Hero/>
          <Program/>
          <Reasons/>
          <Plan/>
          <Testimonial/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
