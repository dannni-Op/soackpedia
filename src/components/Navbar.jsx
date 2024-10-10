import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { IoIosPricetag } from "react-icons/io";
import logo from "./../assets/image/logo.png";
import { Link, } from "react-router-dom";

export default function Navbar()
{
  return (
    <nav class="bg-white border-gray-200">
    <div class="flex flex-wrap bg-[#51565C] items-center justify-around mx-auto p-2 ">
      <Link to="/">
        <img src={logo} class="h-11" alt="" />
      </Link>
      <div class="flex order-2">
        <div class="relative overflow-hidden rounded-lg">
          <input type="text" id="" class="block w-full p-1 pe-14 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg " placeholder="Mau top up games apa ?" />
          <div class="absolute inset-y-0 end-0 flex items-center pe-3 ps-3 pointer-events-none bg-gray-700 border border-0 ">
            <svg class="w-4 h-4 text-amber-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span class="sr-only">Search icon</span>
          </div>
        </div>
      </div>
      <div class="" >
        <ul class="flex font-normal text-white ">
          <li class="">
            <Link class="flex items-center py-2 px-3 rounded-lg hover:bg-gray-700 gap-2" to="/">
                <GoHome class="text-2xl" /> 
                <p class="text-base">Beranda</p>
            </Link>
        </li>
          <li class="">
            <Link class="flex items-center py-2 px-3 rounded-lg hover:bg-gray-700 gap-2" to="/cek-transaksi">
              <CiSearch class="text-2xl " /> 
              <p class="text-base">Cek Transaksi</p>
            </Link>
          </li>
          <li class="">
            <Link class="flex items-center py-2 px-3 rounded-lg hover:bg-gray-700 gap-2" to="/daftar-harga">
              <IoIosPricetag class="text-xl " /> 
              <p class="text-base">Daftar Harga</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
