const SavingsCard = ({ imgURL, eyebrow, label, subtext }) => {
    return (
        <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
            <div className="w-11 h-11 flex justify-center items-center">
                <img src={imgURL} alt={label} width={44} height={44} />
            </div>
            <h3 className="mt-2 font-palanquin text-[40px] leading-normal font-bold">{label}
            <span className="break-words font-palanquin text-lg leading-normal font-bold"> {subtext}</span></h3>
            <p className="break-words font-montserrat text-sm leading-normal text-slate-gray">{eyebrow}</p>
        </div>
    )
}

export default SavingsCard;