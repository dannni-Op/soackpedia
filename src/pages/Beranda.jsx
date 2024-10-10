import { Link, } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Games from "../components/Games.jsx";
import Footer from "../components/Footer.jsx";
import hero from "./../assets/image/event1.png";


function Beranda() {


  return (
    <>
      <Navbar />
      <Hero pic={hero} />
      <Games />
      <Footer />
    </>
  )
}

export default Beranda;
