const ReviewCard = ({ imgURL, customerName, feedback }) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]" />
            <p className="mt-6 w-full lg:w-96 text-center info-text">{feedback}</p>
            <h3 className="mt-3 font-palanquin text-xl font-bold">{customerName}</h3>
        </div>
    )
}

export default ReviewCard;