import Link from "./Link";

const ModelCard = ({ imgURL, name, price, url }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full mt-8">
      <div className="bg-primary bg-hero bg-cover bg-center rounded-3xl border-2 hover:border-yellow-green">
        <img src={imgURL} alt={name} className="w-full h-[280px] object-contain" />
      </div>
      <div className="mt-3 flex flex-col justify-start gap-2.5">
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin
        ">{name}<span className="text-yellow-green">.ev</span></h3>
        <span className="font-montserrat leading-normal mt-1">Starts at: <span className="font-semibold">{price}</span></span>
        <Link label="Learn More" redirctURL={url} />
      </div>
    </div>
  )
}

export default ModelCard;