import "./App.css";
import Banner from "./components/Banner";
import Explore from "./components/Explore";
import Process from "./components/Process";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import Tech from "./components/Tech";
import Client from "./components/Client";


function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Explore/>
      <Process/>
      <Tech/>
      <Client/>
      <Project/>
      <Footer/>
    </>
  );
}

export default App;
