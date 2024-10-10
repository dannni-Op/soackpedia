import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";
import { FaArrowLeft } from "react-icons/fa";
import { Link, } from "react-router-dom";

import ml from "./../assets/image/ml.jpg";

export default function Transaksi()
{
  return (
  <>
      <Navbar />
      <section class="h-[500px] my-8 w-3/4 mx-auto text-white text-center mb-36">
        <Link to="/">
          <div class="text-start flex gap-4 items-center">
            <FaArrowLeft class="text-lg" />
            <h1 class="text-lg font-bold">Detail Pesanan</h1>
          </div>
        </Link>
        <div class="grid grid-cols-2 gap-14 text-sm mt-7">
          <div class="bg-[#212529] rounded-xl grid gap-3 p-6">
            <h1 class="justify-self-start font-bold">Detail Pesanan</h1>
            <hr />
            <div class="w-full flex justify-between items-center">
              <p>Order ID</p>
              <p>220020030</p>
            </div>
            <div class="w-full flex justify-between items-center">
              <p>Tanggal Transaksi</p>
              <p>2024-05-29 10:10:23</p>
            </div>
            <div class="w-full flex justify-between items-center">
              <p>Status Pembayaran</p>
              <p class="bg-green-700 px-2 py-1 rounded-lg">Sudah Dibayar</p>
            </div>
            <div class="w-full flex justify-between items-center">
              <p>Status Transaksi</p>
              <p class="bg-green-700 px-2 py-1 rounded-lg">Success</p>
            </div>
            <div class="w-full flex justify-between items-center">
              <p>Metode Pembayaran</p>
              <p>E-Wallet (Link Aja)</p>
            </div>
            <hr />
            <div class="w-full flex justify-between items-center">
              <p>Jumlah Pesanan</p>
              <p>1</p>
            </div>
            <div class="w-full flex justify-between items-center">
              <p>Harga</p>
              <p>Rp. 27.990</p>
            </div>
            <div class="w-full flex justify-between items-center">
              <p>Biaya Admin</p>
              <p>Rp. 310</p>
            </div>
            <div class="w-full flex justify-between items-center">
              <p>Diskon</p>
              <p>-Rp. 0</p>
            </div>
            <hr />
            <div class="w-full flex justify-between items-center">
              <p>Total</p>
              <p class="text-yellow-300">-Rp. 28.300</p>
            </div>
          </div>
          <div class="bg-[#212529] rounded-xl h-fit p-6 grid gap-3">
            <h1 class="text-start font-bold">Detail Pesanan</h1>
            <hr />
            <div class="flex gap-6">
              <img class="w-24 rounded-2xl" src={ml} alt="" />
              <div class="text-start ">
                <h1 class="text-xl mb-3">Weekly Diamond Pass</h1>
                <p class="text-base ">Mobile Legends</p>
              </div>
            </div>
            <h1 class="text-start font-bold">Detail Player</h1>
            <hr />
            <div class="w-full flex justify-between items-center">
              <p>ID</p>
              <p>220020030</p>
            </div>
            <div class="w-full flex justify-between items-center">
              <p>Server</p>
              <p>8945</p>
            </div>
            <div class="w-full flex justify-between items-center">
              <p>Nickname</p>
              <p>Hisama</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
  </>
  )
}

