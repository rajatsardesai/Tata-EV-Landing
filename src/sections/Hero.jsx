import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { cars, statistics } from "../constants"
import { bigCar1 } from "../assets/images"
import CarCard from "../components/CarCard"
import { useState } from "react"
import HeroCarDetail from "../components/HeroCarDetail"

const Hero = () => {
  const [bigCarImg, setBigCarImg] = useState(bigCar1);

  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-40">
        <p className="text-xl font-montserrat text-yellow-green">The All New TATA</p>

        <HeroCarDetail bigCarImg={bigCarImg}/>

        <Button label="Book Now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {
            statistics.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className="relative flex-1 flex flex-col justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigCarImg} alt="car collection" width={810} height={502} className="object-contain relative z-10" />

        <div className="flex flex-col sm:flex-row sm:gap-5 gap-4 sm:absolute sm:-bottom-[5%] max-sm:px-6">
          {cars.map((car, index) => (
            <div key={index}>
              <CarCard
                imgURL={car}
                changeBigCarImage={(car) => { setBigCarImg(car) }}
                bigCarImg={bigCarImg}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Hero