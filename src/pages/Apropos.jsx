import AboutBox from "../components/AboutBox";
import Footer from "../components/Footer";
import TeamBox from "../components/TeamBox";
import TextWrap from "../components/TextWrap";
import WhyChooseUs from "../components/WhyChooseUs";


function Apropos(){

    return (
        <>
        <AboutBox />
        <section className="apropos">
         <TextWrap />
         <TeamBox />
         <WhyChooseUs />
        </section>
        
        <Footer />
        </>
    );
}


export default Apropos;