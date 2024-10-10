import { Link, } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Games from "../components/Games.jsx";
import Footer from "../components/Footer.jsx";
import PriceCard from "../components/PriceCard.jsx";

import hero from "./../assets/image/event2.jpg";
import uc from "./../assets/image/uc.png";
import dm from "./../assets/image/dm.png";
import dmBanyak from "./../assets/image/dm-banyak.png";


function DaftarHarga() {

  return (
    <>
      <Navbar />
      <Hero pic={hero} />
      <section class="w-3/4 mx-auto">
        <div>
          <h1 class="text-white font-bold text-xl my-3">🔥 Mobile Legends !</h1>
          <div class="grid grid-cols-6 justify-items-center gap-y-2 gap-2">

            <PriceCard pic={dm} title={"5 (5 + 0) Diamonds"} price="1.498" />
            <PriceCard pic={dm} title={"10 (9 + 1) Diamonds"} price="3.038" />
            <PriceCard pic={dm} title={"12 (11 + 1) Diamonds"} price="3.496" />
            <PriceCard pic={dm} title={"18 (17 + 1) Diamonds"} price="5.063" />
            <PriceCard pic={dm} title={"19 (17 + 2) Diamonds"} price="5.493" />
            <PriceCard pic={dm} title={"20 (18 + 2) Diamonds"} price="6.076" />

            <PriceCard pic={dm} title={"22 (20 + 2) Diamonds"} price="6.533" />
            <PriceCard pic={dm} title={"28 (25 + 3) Diamonds"} price="7.991" />
            <PriceCard pic={dm} title={"30 (28 + 2) Diamonds"} price="8.558" />
            <PriceCard pic={dm} title={"33 (30 + 3) Diamonds"} price="9.489" />
            <PriceCard pic={dm} title={"36 (33 + 3) Diamonds"} price="10.125" />
            <PriceCard pic={dm} title={"44 (40 + 4) Diamonds"} price="11.985" />

            <PriceCard pic={dmBanyak} title={"100 (91 + 9) Diamonds"} price="27.507" />
            <PriceCard pic={dmBanyak} title={"110 (100 + 10) Diamonds"} price="30.374" />
            <PriceCard pic={dmBanyak} title={"113 (102 + 11) Diamonds"} price="30.962" />
            <PriceCard pic={dmBanyak} title={"116 (105 + 11) Diamonds"} price="32.290" />
            <PriceCard pic={dmBanyak} title={"129 (117 + 12) Diamonds"} price="34.956" />
            <PriceCard pic={dmBanyak} title={"148 (134 + 14) Diamonds"} price="40.498" />

            <PriceCard pic={dmBanyak} title={"170 (154 + 16) Diamonds"} price="45.940" />
            <PriceCard pic={dmBanyak} title={"176 (160 + 16) Diamonds"} price="48.598" />
            <PriceCard pic={dmBanyak} title={"222 (200 + 22) Diamonds"} price="60.747" />
          </div>
        </div>
        <div>
          <h1 class="text-white font-bold text-xl my-3">🔥 PUBG Mobile !</h1>
          <div class="grid grid-cols-6 justify-items-center gap-y-2 gap-2">
            <PriceCard pic={uc} title={"5 (5 + 0) UC Global"} price="1.498" />
            <PriceCard pic={uc} title={"10 (9 + 1) UC Global"} price="3.038" />
            <PriceCard pic={uc} title={"12 (11 + 1) UC Global"} price="3.496" />
            <PriceCard pic={uc} title={"18 (17 + 1) UC Global"} price="5.063" />
            <PriceCard pic={uc} title={"19 (17 + 2) UC Global"} price="5.493" />
            <PriceCard pic={uc} title={"20 (18 + 2) UC Global"} price="6.076" />

            <PriceCard pic={uc} title={"22 (20 + 2) UC Global"} price="6.533" />
            <PriceCard pic={uc} title={"28 (25 + 3) UC Global"} price="7.991" />
            <PriceCard pic={uc} title={"30 (28 + 2) UC Global"} price="8.558" />
            <PriceCard pic={uc} title={"33 (30 + 3) UC Global"} price="9.489" />
            <PriceCard pic={uc} title={"36 (33 + 3) UC Global"} price="10.125" />
            <PriceCard pic={uc} title={"44 (40 + 4) UC Global"} price="11.985" />

            <PriceCard pic={uc} title={"100 (91 + 9) UC Global"} price="27.507" />
            <PriceCard pic={uc} title={"110 (100 + 10) UC Global"} price="30.374" />
            <PriceCard pic={uc} title={"113 (102 + 11) UC Global"} price="30.962" />
            <PriceCard pic={uc} title={"116 (105 + 11) UC Global"} price="32.290" />
            <PriceCard pic={uc} title={"129 (117 + 12) UC Global"} price="34.956" />
            <PriceCard pic={uc} title={"148 (134 + 14) UC Global"} price="40.498" />
          </div>
        </div>
        <div>
          <h1 class="text-white font-bold text-xl my-3">🔥 Free Fire !</h1>
          <div class="grid grid-cols-6 justify-items-center gap-y-2 gap-2">
            <PriceCard pic={dm} title={"5 (5 + 0) Diamonds"} price="1.498" />
            <PriceCard pic={dm} title={"10 (9 + 1) Diamonds"} price="3.038" />
            <PriceCard pic={dm} title={"12 (11 + 1) Diamonds"} price="3.496" />
            <PriceCard pic={dm} title={"18 (17 + 1) Diamonds"} price="5.063" />
            <PriceCard pic={dm} title={"19 (17 + 2) Diamonds"} price="5.493" />
            <PriceCard pic={dm} title={"20 (18 + 2) Diamonds"} price="6.076" />
            <PriceCard pic={dm} title={"22 (20 + 2) Diamonds"} price="6.533" />
            <PriceCard pic={dm} title={"28 (25 + 3) Diamonds"} price="7.991" />
            <PriceCard pic={dm} title={"30 (28 + 2) Diamonds"} price="8.558" />
            <PriceCard pic={dm} title={"33 (30 + 3) Diamonds"} price="9.489" />
            <PriceCard pic={dm} title={"36 (33 + 3) Diamonds"} price="10.125" />
            <PriceCard pic={dm} title={"44 (40 + 4) Diamonds"} price="11.985" />
          </div>
        </div>
        <div class="text-center mt-8">
          <button class="bg-[#212121] text-white py-3 px-16 rounded-lg">
            Tampilkan Lainnya ...
          </button>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default DaftarHarga;
