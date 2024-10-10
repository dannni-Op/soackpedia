// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Games from "./components/Games.jsx";
import Footer from "./components/Footer.jsx";
import CekTransaksi from "./pages/CekTransaksi.jsx";
import Beranda from "./pages/Beranda.jsx";
import DaftarHarga from "./pages/DaftarHarga.jsx";
import Pesan from "./pages/Pesan.jsx";
import Transaksi from "./pages/Transaksi.jsx";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Beranda />,
    },
    {
      path: "cek-transaksi",
      element: <CekTransaksi />,
    },
    {
      path: "daftar-harga",
      element: <DaftarHarga />,
    },
    {
      path: "pesan",
      element: <Pesan />,
    },
    {
      path: "transaksi",
      element: <Transaksi />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
