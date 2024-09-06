import { useState } from "react";
import Header from "./components/Header";
import { MobileSidebar } from "./components/MobileSidebar";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  const[toggleHeader,setToggleHeader] = useState(false);
  const toggle =()=>{
    setToggleHeader(!toggleHeader);
  }
  return (
    <div className="bg-white opacity-90 flex flex-col items-center">
      <Header fun={toggle}/>
      <MobileSidebar val={toggleHeader}/>
      <Banner/>
      <About />
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
