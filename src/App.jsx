import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Resume from "./component/Resume";
import Portfolio from "./component/Portfolio";
import Achievements from "./component/Achievements";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Achievements />
      <Footer />
    </>
  );
}

export default App;
