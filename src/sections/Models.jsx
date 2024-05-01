import { ModelCard } from "../components";
import { models } from "../constants"

const Models = () => {
  return (
    <section id="models" className="max-container max-smLmt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our Range</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Tata's electric vehicle lineup combines innovative, aesthetics and cutting-edge performance, Tata EV models lead the charge towards a greener future on the roads.</p>
      </div>

      <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm-grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {models.map((model) => (
          <ModelCard key={model.name} {...model} />
        ))}
      </div>
    </section>
  )
}

export default Models;