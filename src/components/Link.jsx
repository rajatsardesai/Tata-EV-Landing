import { arrowRight } from "../assets/icons"

const Link = ({ redirctURL, label }) => {
    return (
        <div>
            <a href={redirctURL} target="_blank" className="gap-1 py-1 font-montserrat text-sm leading-none">
                {label}
                <img src={arrowRight} alt="arrow right icon" className="inline-block rounded-full w-5 h-5" />
            </a>
        </div>
    )
}

export default Link;