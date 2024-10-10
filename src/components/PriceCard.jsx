export default function PriceCard({pic, title, price})
{
  return (
    <section class="bg-gray-400 w-fit flex px-2 py-2 justify-between items-center rounded-lg w-full" >
      <div class="text-black">
        <p class="text-[10px] mb-2">{title}</p>
        <p class="text-[10px]">Rp. {price}</p>
      </div>
      <img class="h-9 " src={pic} alt="" />
    </section>
  )
}
