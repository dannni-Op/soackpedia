import { Link, } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";
import pic from "./../assets/image/ml-nrext.jpeg";
import ml from "./../assets/image/ml.jpg";
import weekly from "./../assets/image/weekly.png";
import dm from "./../assets/image/dm.png";
import dmBanyak from "./../assets/image/dm-banyak.png";
import PriceCard from "../components/PriceCard.jsx";

import linkaja from "./../assets/image/linkaja.png";
import dana from "./../assets/image/dana.png";
import ovo from "./../assets/image/ovo.png";
import bca from "./../assets/image/bca.png";
import bni from "./../assets/image/bni.png";
import bri from "./../assets/image/bri.png";

export default function Pesan()
{
  return (
    <section class="">
      <Navbar />
      <Hero pic={pic} />
      <div class="text-white flex mx-auto w-3/4 gap-8 mt-6">
        <img class="rounded-xl h-40" src={ml} alt="" />
        <div class="flex flex-col justify-between">
          <div>
            <h1 class="text-2xl font-bold">MOBILE LEGENDS</h1>
            <p class="text-lg">Moonton</p>
          </div>
          <span class="flex gap-14 font-light">
            <p>⚡ Proses Cepat</p>
            <p>🌐 Layanan 24 jam</p>
            <p>✅ Murah dan Terpercaya</p>
          </span>
        </div>
      </div>

      <div class="mx-auto w-3/4 my-8 flex gap-14 mb-32">
        <div class="text-white text-sm w-5/6">
          <p class="bg-[#424649] px-8 py-2 rounded-lg mb-2">Deskripsi dan cara melakukan transaksi</p>
          <div class="bg-[#424649] px-8 py-6 rounded-lg" >
            <p class="mb-6">Top up ML diamond Mobile Legends harga paling murah. Cara topup MLBB termurah :</p>
            <ul>
              <li>1. Masukkan ID & server</li>
              <li>2. Pilih Nominal</li>
              <li>3. Masukkan jumlah</li>
              <li>4. Pilih Pembayaran</li>
              <li>5. Masukkan No WhatsApp</li>
              <li>6. Klik Order Now & lakukan Pembayaran</li>
              <li>7. Diamonds otomatis masuk ke akun game</li>
            </ul>
          </div>
        </div>
        <div class="text-white">
          <div class="overflow-hidden bg-[#424649] rounded-lg ">
            <div class="bg-[#5F666D] flex items-center gap-4">
              <p class="bg-[#D7B500] px-4 py-2 w-fit text-black font-bold">1</p>
              <p class="font-bold">Masukan Data Akun</p>
            </div>
            <div class="grid grid-cols-2 px-6 py-0 pt-4 gap-6">
              <div>
                <label for="id" class="block mb-2">ID</label>
                <input type="text" id="id" class="bg-[#5F666D] block w-full p-1 ps-3 text-sm text-gray-900 rounded-lg ring-0" placeholder="Ketikan ID" />
              </div>
              <div>
                <label for="id" class="block mb-2">Server</label>
                <input type="text" id="id" class="bg-[#5F666D] block w-full p-1 ps-3 text-sm text-gray-900 rounded-lg ring-0" placeholder="Ketikan Server" />
              </div>
            </div>
            <p class="px-6 text-sm font-light py-4">Untuk menemukan ID & Server akun Anda, klik avatar Anda di pojok kiri atas layar dan buka tab Info Umum. Contoh: 12345678 (9864), maka ID adalah 12345678 dan Server adalah 9864</p>
          </div>


          <div class="overflow-hidden bg-[#424649] rounded-lg mt-6">
            <div class="bg-[#5F666D] flex items-center gap-4">
              <p class="bg-[#D7B500] px-4 py-2 w-fit text-black font-bold">2</p>
              <p class="font-bold">Pilih Nominal</p>
            </div>
            <div class="px-6 pt-6 ">
              <h1 class="font-bold mb-3">Special Items</h1>
              <div class="grid grid-cols-3 gap-1">
                <PriceCard pic={weekly} title={"Weekly Diamond Pass"} price="27.990" />
                <PriceCard pic={weekly} title={"4x Weekly Diamond Pass"} price="111.958" />
                <PriceCard pic={weekly} title={"2x Weekly Diamond Pass"} price="55.979" />
                <PriceCard pic={weekly} title={"3x Weekly Diamond Pass"} price="83.968" />
                <PriceCard pic={weekly} title={"5x Weekly Diamond Pass"} price="139.947" />
              </div>
            </div>
            <div class="px-6 py-4 pb-6">
              <h1 class="font-bold mb-3">Top Up Instant</h1>
              <div class="grid grid-cols-3 gap-1">
                <PriceCard pic={dm} title={"5 (5 + 0) Diamonds"} price="1.498" />
                <PriceCard pic={dm} title={"18 (17 + 1) Diamonds"} price="5.063" />
                <PriceCard pic={dm} title={"10 (9 + 1) Diamonds"} price="3.038" />
                <PriceCard pic={dm} title={"19 (17 + 2) Diamonds"} price="5.493" />
                <PriceCard pic={dm} title={"22 (20 + 2) Diamonds"} price="6.533" />
                <PriceCard pic={dm} title={"28 (25 + 3) Diamonds"} price="7.991" />
                <PriceCard pic={dm} title={"33 (30 + 3) Diamonds"} price="9.489" />
                <PriceCard pic={dm} title={"36 (33 + 3) Diamonds"} price="10.125" />
                <PriceCard pic={dm} title={"100 (91 + 9) Diamonds"} price="27.507" />
                <PriceCard pic={dm} title={"116 (105 + 11) Diamonds"} price="32.290" />
                <PriceCard pic={dm} title={"110 (100 + 10) Diamonds"} price="30.374" />
                <PriceCard pic={dm} title={"129 (117 + 12) Diamonds"} price="34.956" />
                <PriceCard pic={dmBanyak} title={"176 (160 + 16) Diamonds"} price="45.940" />
                <PriceCard pic={dmBanyak} title={"170 (154 + 16) Diamonds"} price="48.598" />
                <PriceCard pic={dmBanyak} title={"12 (11 + 1) Diamonds"} price="3.496" />
                <PriceCard pic={dmBanyak} title={"20 (18 + 2) Diamonds"} price="6.076" />
                <PriceCard pic={dmBanyak} title={"30 (28 + 2) Diamonds"} price="8.558" />
                <PriceCard pic={dmBanyak} title={"44 (40 + 4) Diamonds"} price="11.985" />
                <PriceCard pic={dmBanyak} title={"113 (102 + 11) Diamonds"} price="30.962" />
                <PriceCard pic={dmBanyak} title={"148 (134 + 14) Diamonds"} price="40.498" />
                <PriceCard pic={dmBanyak} title={"222 (200 + 22) Diamonds"} price="60.747" />
              </div>
            </div>
          </div>

          <div class="overflow-hidden bg-[#424649] rounded-lg mt-6">
            <div class="bg-[#5F666D] flex items-center gap-4">
              <p class="bg-[#D7B500] px-4 py-2 w-fit text-black font-bold">3</p>
              <p class="font-bold">Masukan Jumlah Pembelian</p>
            </div>
            <div class="px-6 py-4 flex justify-between">
                <input type="text" id="id" class="bg-[#5F666D] w-4/5 p-1 ps-3 text-sm text-gray-900 rounded-lg ring-0" placeholder="" />
                <button class="bg-[#D7B500] px-2 rounded-md text-black text-lg">+</button>
                <button class="bg-[#D7B500] px-3 rounded-md text-black text-lg">-</button>
            </div>
          </div>


          <div class="overflow-hidden bg-[#424649] rounded-lg mt-6">
            <div class="bg-[#5F666D] flex items-center gap-4">
              <p class="bg-[#D7B500] px-4 py-2 w-fit text-black font-bold">4</p>
              <p class="font-bold">Pilih Pembayaran</p>
            </div>
            <div class="px-6 py-4 pb-3">
              <h1 class="font-bold mb-3">E-Wallet</h1>
              <div class="grid grid-cols-3 gap-1">
                <section class="bg-gray-400 w-fit flex px-2 py-2 items-center rounded-lg w-full" >
                  <img class="h-10 mx-3" src={linkaja} alt="" />
                  <div class="text-black">
                    <p class="text-[10px] ">Link Aja</p>
                    <div class="h-[1px] w-full bg-gray-800 my-1"></div>
                    <p class="text-[10px]">Proses Otomatis</p>
                  </div>
                </section>
                <section class="bg-gray-400 w-fit flex px-2 py-2 items-center rounded-lg w-full" >
                  <img class="h-7 me-3" src={dana} alt="" />
                  <div class="text-black">
                    <p class="text-[10px] ">Dana</p>
                    <div class="h-[1px] w-full bg-gray-800 my-1"></div>
                    <p class="text-[10px]">Proses Otomatis</p>
                  </div>
                </section>
                <section class="bg-gray-400 w-fit flex px-2 py-2 items-center rounded-lg w-full" >
                  <img class="h-12 " src={ovo} alt="" />
                  <div class="text-black">
                    <p class="text-[10px] ">Ovo</p>
                    <div class="h-[1px] w-full bg-gray-800 my-1"></div>
                    <p class="text-[10px]">Proses Otomatis</p>
                  </div>
                </section>
              </div>
            </div>
            <div class="px-6 py-4 pb-6">
              <h1 class="font-bold mb-3">Virtual Account</h1>
              <div class="grid grid-cols-3 gap-1">
                <section class="bg-gray-400 w-fit flex px-2 py-2 items-center rounded-lg w-full" >
                  <img class="h-12 me-2" src={bca} alt="" />
                  <div class="text-black">
                    <p class="text-[10px] ">BCA</p>
                    <div class="h-[1px] w-full bg-gray-800 my-1"></div>
                    <p class="text-[10px]">Proses Otomatis</p>
                  </div>
                </section>
                <section class="bg-gray-400 w-fit flex px-2 py-2 items-center rounded-lg w-full" >
                  <img class="h-12 me-2" src={bni} alt="" />
                  <div class="text-black">
                    <p class="text-[10px] ">BNI</p>
                    <div class="h-[1px] w-full bg-gray-800 my-1"></div>
                    <p class="text-[10px]">Proses Otomatis</p>
                  </div>
                </section>
                <section class="bg-gray-400 w-fit flex px-2 py-2 items-center rounded-lg w-full" >
                  <img class="h-10 me-2" src={bri} alt="" />
                  <div class="text-black">
                    <p class="text-[10px] ">BRI</p>
                    <div class="h-[1px] w-full bg-gray-800 my-1"></div>
                    <p class="text-[10px]">Proses Otomatis</p>
                  </div>
                </section>
              </div>
            </div>
          </div>


          <div class="overflow-hidden bg-[#424649] rounded-lg mt-6">
            <div class="bg-[#5F666D] flex items-center gap-4">
              <p class="bg-[#D7B500] px-4 py-2 w-fit text-black font-bold">5</p>
              <p class="font-bold">Detatil Kontak</p>
            </div>
            <div class="px-6 py-4 grid gap-2">
                <label >No. WhatsApp</label>
                <input type="text" id="id" class="bg-[#5F666D] w-full p-1 ps-3 text-sm text-gray-900 rounded-lg ring-0" placeholder="" />
                <p class="font-light text-sm">**Nomor ini akan dihubungi jika terjadi masalah , kami akan menghubungi nomor WA kamu diatas</p>
            </div>
          </div>

          <Link to="/transaksi">
            <button class="bg-[#D7B500] px-3 py-3 w-full rounded-md text-black text-sm mt-6">Pesan Sekarang !</button>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  )
}
