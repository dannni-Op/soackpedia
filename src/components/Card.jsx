
export default function Card({pic, title, textBody})
{
  return (
    <section class="flex gap-4 items-center">
      {pic}
      <div class="text-white">
        <h4 class="text-xl">{title}</h4>
        <p class="font-light">{textBody}</p>
      </div>
    </section>
  )
}
