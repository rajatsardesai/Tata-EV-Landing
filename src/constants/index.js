import { facebook, instagram, rupees, trees, co2, twitter } from "../assets/icons";
import { bigCar1, bigCar2, bigCar3, bigCar4, customer1, customer2, car1, car2, car3, car4 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#cars", label: "Cars" },
    { href: "#contact-us", label: "Contact Us" },
];

export const cars = [
    {
        bigCar: bigCar1,
    },
    {
        bigCar: bigCar2,
    },
    {
        bigCar: bigCar3,
    },
    {
        bigCar: bigCar4,
    },
];

export const statistics = [
    { value: '1k+', label: 'Showrooms' },
    { value: '500+', label: 'Service Centers' },
    { value: '250k+', label: 'Customers' },
];

export const models = [
    {
        bigCar: bigCar1,
        imgURL: car1,
        name: "Punch",
        price: "₹10.99 Lakh*",
        url: "https://ev.tatamotors.com/punch/ev.html",
        description: "Here's a new world of versatility where you take the extra mile with the Punch.ev."
    },
    {
        bigCar: bigCar2,
        imgURL: car2,
        name: "Nexon",
        price: "₹14.49 Lakh*",
        url: "https://ev.tatamotors.com/nexon/ev.html",
        description: "The all-new Nexon.ev represents a stunning leap forward in design, cabin comfort, performance, technology and safety for you and your family."
    },
    {
        bigCar: bigCar3,
        imgURL: car3,
        name: "Tiago",
        price: "₹7.99 Lakh*",
        url: "https://ev.tatamotors.com/tiago/ev.html",
        description: "If you got it, flaunt it. And when it comes to the Tiago.ev , you don't even need to try too hard."
    },
    {
        bigCar: bigCar4,
        imgURL: car4,
        name: "Tigor",
        price: "₹12.49 Lakh*",
        url: "https://ev.tatamotors.com/tigor/ev.html",
        description: "When life offers more, you take it without a second thought. And with Tigor.ev, you get more tech, more lux, and more confidence to take on the city."
    },
];

export const savings = [
    {
        imgURL: rupees,
        eyebrow: "Minimum Fuel cost savings",
        label: "₹122,940",
        subtext: ""
    },
    {
        imgURL: co2,
        eyebrow: "Minimum Equivalent Tailpipe CO2 Reduction",
        label: "5.29",
        subtext: "Million grams"
    },
    {
        imgURL: trees,
        eyebrow: "Minimum Equivalent to CO2 reduction",
        label: "245",
        subtext: "Full grown trees"
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];