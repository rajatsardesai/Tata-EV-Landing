import Link from "../components/Link"

const Vision = () => {
  return (
    <section id="vision" className="flex justify-between max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">Our Vision</h2>
        <p className="lg:max-w-lg mt-8 mb-4 font-montserrat text-slate-gray">We innovate mobility solutions with passion to enhance the quality of life. With most number of homegrown electric cars on road already, our cars are helping India go.ev. Driven over 2 billion kms.</p>
        <Link label="Read More" redirctURL={"https://ev.tatamotors.com/support/finance/articles/Avinya.html"} />
      </div>

      <div className="flex-1 flex justify-center items-center">
        <video controls preload="metadata" playsInline="playsinline" muted="muted" loop="loop" autoPlay="autoplay">
          <source src="https://s7ap1.scene7.com/is/content/tatapassenger/avinya-product-film#t=0.001" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    </section>
  )
}

export default Vision;