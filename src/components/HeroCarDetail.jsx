import { models } from "../constants";

const HeroCarDetail = ({ bigCarImg }) => {
    return (
        <>
            {
                models.map((model) => {
                    if (model.bigCar === bigCarImg) {
                        return (
                            <div key={model.name}>
                                <h1 className="font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                                    <span>{model.name}</span>
                                    <span className="text-yellow-green inline-block mt-3">.ev</span>
                                </h1>
                                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">{model.description}</p>
                            </div>
                        );
                    }
                    return null;
                })
            }
        </>
    );
};

export default HeroCarDetail;