import Card from "./Card.jsx";
import pubg from "./../assets/image/pubg.jpg";
import ml from "./../assets/image/ml.jpg";
import ff from "./../assets/image/ff.jpg";
import valorant from "./../assets/image/valo.jpg";
import hok from "./../assets/image/hok.jpg";
import ffmax from "./../assets/image/ff max.jpg";
import lol from "./../assets/image/lolwr.jpg";
import pb from "./../assets/image/pb.jpg";
import codm from "./../assets/image/codm.jpg";
import coc from "./../assets/image/coc.jpg";
import gi from "./../assets/image/genshin.jpg";
import aov from "./../assets/image/aov.jpg";
import { Link, } from "react-router-dom";

export default function Games()
{
  return (
    <section class="mx-auto w-3/4">
      <div class="text-white mb-4">
        <h1 class="text-2xl font-bold">🔥 Populer Sekarang!</h1>
        <p class="font-light">Berikut adalah produk yang paling populer saat ini</p>
      </div>
      <div class="grid grid-cols-3 gap-x-24 gap-y-5">
        <Link to="/pesan">
          <Card pic={<img class="w-24 h-24 rounded-2xl" src={ml} alt="" />} title="Mobile Legends" textBody="Moonton" />
        </Link>
        <Card pic={<img class="w-24 h-24 rounded-2xl" src={pubg} alt="" />} title="PUBG Mobile" textBody="Tencent Games" />
        <Card pic={<img class="w-24 h-24 rounded-2xl" src={ff} alt="" />} title="Free Fire" textBody="Garena" /> 
        <Card pic={<img class="w-24 h-24 rounded-2xl" src={valorant} alt="" />} title="Valorant" textBody="Riot Games" />
        <Card pic={<img class="w-24 h-24 rounded-2xl" src={hok} alt="" />} title="Honor Of Kings" textBody="Tencent Games" />
        <Card pic={<img class="w-24 h-24 rounded-2xl" src={ffmax} alt="" />} title="Free Fire Max" textBody="Garena" /> 
        <Card pic={<img class="w-24 h-24 rounded-2xl" src={lol} alt="" />} title="League Of Legends" textBody="Riot Games" />
        <Card pic={<img class="w-24 h-24 rounded-2xl" src={pb} alt="" />} title="Point Blank" textBody="Zepetto" />
        <Card pic={<img class="w-24 h-24 rounded-2xl" src={codm} alt="" />} title="Call Of Duty Mobile" textBody="Garena" /> 
        <Card pic={<img class="w-24 h-24 rounded-2xl" src={coc} alt="" />} title="Clash Of Clans" textBody="Supercell" />
        <Card pic={<img class="w-24 h-24 rounded-2xl" src={gi} alt="" />} title="Genshin Impact" textBody="HoYoverse" />
        <Card pic={<img class="w-24 h-24 rounded-2xl" src={aov} alt="" />} title="Arena Of Valor" textBody="Garena" /> 
      </div>
      <div class="text-center mt-8">
        <button class="bg-[#212121] text-white py-3 px-16 rounded-lg">
          Tampilkan Lainnya ...
        </button>
      </div>
    </section>
  )
}
