import SavingsCard from "../components/ServiceCard"
import { savings } from "../constants"

const Savings = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {savings.map((saving) => (
        <SavingsCard key={saving.label} {...saving} />
      ))}
    </section>
  )
}

export default Savings