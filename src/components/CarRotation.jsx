import { useEffect, useState } from "react";
import { carRotateImgs } from "../constants"

const CarRotation = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carRotateImgs.length);
        }, 70);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relative w-full h-80 mx-auto overflow-hidden rounded-full">
            {
                carRotateImgs.map((imageUrl, index) => (
                    <img
                        key={index}
                        className={`absolute inset-0 object-cover  transition-opacity duration-0 ease-linear ${index === currentImageIndex ? 'opacity-1' : 'opacity-0'
                            }`}
                        src={imageUrl}
                        alt="punch.ev 360 view"
                    />
                ))
            }
        </div>
    )
}

export default CarRotation;