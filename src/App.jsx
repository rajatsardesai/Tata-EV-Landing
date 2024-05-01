import { Nav } from "./components";
import {
  Hero, Models, Vision, Savings, DigitalShowroom, CustomerReviews,
  TestDrive, Footer
} from "./sections";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b"><Hero /></section>
    <section className="padding"><Models /></section>
    <section className="padding"><Vision /></section>
    <section className="padding-x py-10"><Savings /></section>
    <section className="padding"><DigitalShowroom /></section>
    <section className="bg-pale-blue padding"><CustomerReviews /></section>
    <section className="padding-x sm:py-32 py-16 w-full"><TestDrive /></section>
    <section className="bg-black padding-x padding-t pb-8"><Footer /></section>
  </main>
);

export default App;