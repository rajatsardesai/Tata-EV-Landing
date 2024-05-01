import { CarRotation } from "../components"
import { Link } from "../components"

const DigitalShowroom = () => {
  return (
    <section id="digital-showroom" className="flex justify-between max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 justify-center items-center">
        <CarRotation />
      </div>

      <div className="flex-1 flex flex-col">
        <h2 className="text-4xl font-palanquin font-bold">Digital Showroom</h2>
        <p className="lg:max-w-lg mt-8 mb-4 font-montserrat text-slate-gray">Step into the future with Tata Motors: where innovation meets elegance in every pixel. Explore our digital showroom for a glimpse into tomorrow's driving experience. Your journey starts here, with cutting-edge technology and timeless design. Welcome to the next era of automotive excellence.</p>
        <Link label="Explore Now" redirctURL={"https://ev.tatamotors.com/digital-showroom.html"} />
      </div>
    </section>
  )
}

export default DigitalShowroom