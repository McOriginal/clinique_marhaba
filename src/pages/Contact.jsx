import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";


function Contact(){

    return (
        <>
        <section>
            <div className="contact">
                <h1>Contactez-nous à tout moment</h1>
            </div>

            <ContactForm />

        </section>

        <Footer />
        </>
    );
}

export default Contact;