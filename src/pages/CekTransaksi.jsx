import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Games from "../components/Games.jsx";
import Footer from "../components/Footer.jsx";
import { FaArrowLeft } from "react-icons/fa";
import { Link, } from "react-router-dom";


function CekTransaksi()
{
  return (
    <>
      <Navbar />
      <section class="h-[500px] my-8 w-3/4 mx-auto text-white text-center">
        <div class="text-start flex gap-4 items-center">
          <Link to="/">
            <FaArrowLeft class="text-2xl" />
          </Link>
          <h1 class="text-2xl font-bold">Cek Transaksi</h1>
        </div>
        <div class="text-start ms-10 my-3">
          <p class="text-md mb-2">Order ID</p>
          <input type="text" id="" class="bg-[#5F666D] block w-full p-1 ps-3 text-sm rounded-md " placeholder="Ketikan Order ID" />
        </div>
        <Link to="/transaksi">
          <button class="bg-amber-300 text-gray-900 py-1 px-48 rounded-lg font-bold">Cari !</button>
        </Link>
      </section>
      <Footer />
    </>
  )
}

export default CekTransaksi;
