import { Footer, LandingPage, Newsletter, WhatToDo, WhyChooseUs } from "../../components/index";

const Home = () => {
    return (
        <section id="home">
            <LandingPage/>
            <WhatToDo/>
            <WhyChooseUs/>
            <Newsletter/>
        </section>
    )
}

export default Home;