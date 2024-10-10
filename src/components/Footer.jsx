import logo from "./../assets/image/logo.png";
import ig from "./../assets/image/ig.png";
import tt from "./../assets/image/tt.jpg";
import gmail from "./../assets/image/Gmail.jpg";
import { Link, } from "react-router-dom";

export default function Footer()
{
  return (
      <footer class="w-11/12 mx-auto mt-20">
        <Link to="/" class="w-fit block">
          <img src={logo} class="h-15" alt="" />
        </Link>
        <div class="grid grid-cols-5 text-white mt-6 justify-items-center">
          <div class="col-span-2 flex flex-col justify-between">
            SOACK PEDIA adalah tempat top up games yang aman, murah dan terpercaya. Proses cepat 1- 3 Detik. Open 24 jam. Payment terlengkap. Jika ada kendala silahkan  hubungi admin kami.
            <span class="flex gap-8">
              <img class="h-8 w-8" src={ig} alt="" />
              <img class="h-8 w-8 rounded-lg" src={tt} alt="" />
              <img class="h-8 w-8 rounded-lg" src={gmail} alt="" />
            </span>
          </div>
          <div class="grid gap-4">
            <h1 class="text-amber-300">Peta Situs</h1>
            <h1>Beranda</h1>
            <h1>Cek Transaksi</h1>
            <h1>Daftar Harga</h1>
          </div>
          <div class="grid gap-4">
            <h1 class="text-amber-300">Dukungan</h1>
            <h1>Instagram</h1>
            <h1>Tiktok</h1>
            <h1>Email</h1>
          </div>
          <div class="grid gap-4 content-start">
            <h1 class="text-amber-300">Legalitas</h1>
            <h1>Kebijakan Pribadi</h1>
            <h1>Syarat & Ketentuan</h1>
          </div>
        </div>
        <hr class="my-5" />
        <p class="text-white pb-5">©️ 2024 SOACKPEDIA. All rights reserved.</p>
      </footer>
  )
}
