import { testDrive } from "../assets/images";
import { Link } from "../components"

const TestDrive = () => {
  return (
    <section id="test-drive" className="flex justify-between max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">Take a Test Drive</h2>
        <p className="lg:max-w-lg mt-8 mb-4 font-montserrat text-slate-gray">We know you’ll love our EVs, which is why you can try them for an hour, a day, or a weekend. When you decide you want to keep it, you can buy online and its yours.</p>
        <Link label="Book Now" redirctURL={"https://ev.tatamotors.com/account/login.html"} />
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={testDrive}
          alt='test drive'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
    </section>
  )
}

export default TestDrive;