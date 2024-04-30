const CarCard = ({ imgURL, changeBigCarImage, bigCarImg }) => {
  const handleClick = () => {
    if (bigCarImg !== imgURL.bigCar) {
      changeBigCarImage(imgURL.bigCar);
    }
  }

  return (
    <div className={`border-2 rounded-xl ${bigCarImg === imgURL.bigCar ? 'border-yellow-green' : 'border-transparent'} cursor-pointer max-sm:flex-1`} onClick={handleClick}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-36 sm-h-36 rounded-xl max-sm:p-4 p-5">
        <img src={imgURL.bigCar} alt="car collection" width={127} height={103} className="object-contain" />
      </div>
    </div>
  )
}

export default CarCard