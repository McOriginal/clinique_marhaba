import Header from "../components/Header";
import HeaderCards from "../components/HeaderCards";
import { MdMedicalServices } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { TbBus } from "react-icons/tb";
import { FaScissors } from "react-icons/fa6";

import classes from '../css/HeaderCards.module.css';
import Footer from "../components/Footer";



function Home(){

    return(
        <>
        <Header />
       <div className={classes.cards_container}>
       <HeaderCards cardLogo={<MdMedicalServices />} 
        title="24/24 services"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rem iusto repellat! Esse quasi id rem? Debitis laboriosam" 
        />

        <HeaderCards cardLogo={<FaUserDoctor />} 
        title="des docteurs qualifiée"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rem iusto repellat! Esse quasi id rem? Debitis laboriosam" 
        />

        <HeaderCards cardLogo={<TbBus />} 
        title="Voitures d'urgence"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rem iusto repellat! Esse quasi id rem? Debitis laboriosam" 
        />

        <HeaderCards cardLogo={<FaScissors />} 
        title="Opération à succès"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rem iusto repellat! Esse quasi id rem? Debitis laboriosam" 
        />
       </div>

       <Footer />
        </>
    );
}

export default Home;