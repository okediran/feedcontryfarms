import React,{useEffect} from 'react';
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Banner from "./components/banner/banner";
import About from "./pages/about";
import Contact from "./pages/contact";
import Partners from "./pages/partners";
import Why from "./pages/why";
import Service from "./pages/service";
import Process from "./pages/process";
import MouseAnimated from "./components/mouse";
import AOS from 'aos'; 

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  })
  

  return (
    <div className="App">
      <MouseAnimated/>
      < Navbar/>
      < Banner/>
      < About/>
      < Service/>
      <Process/>
      <Why/>
      < Contact/>
      < Partners/>
      < Footer/>
    </div>
  );
}

export default App;
