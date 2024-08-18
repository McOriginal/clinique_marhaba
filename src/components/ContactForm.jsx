import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import classes from '../css/ContactForm.module.css';

function ContactForm(){
    

    return (
        <>
        <div className={classes.contact__container}>
            <div className={classes.container__address}>
                    <h1> Nos clinics</h1>
                    
                <div className={classes.container__address__containte}>
                    

                    <div className={classes.detail__div}>
                    <FaPhoneVolume  className={classes.icon} />
                    <p>+223 77 77 00 00</p>
                 </div>


                    <div className={classes.detail__div}>
                    <FaMapMarkerAlt className={classes.icon} />
                    <p className={classes.address}> Sotuba ACI près de IBIZZA</p>

                 </div>
                </div>
                <div className={classes.container__address__containte}>
                    

                    <div className={classes.detail__div}>
                    <FaPhoneVolume  className={classes.icon} />
                    <p>+223 66 88 22 32</p>
                 </div>


                    <div className={classes.detail__div}>
                    <FaMapMarkerAlt className={classes.icon} />
                    <p className={classes.address}> Hamdallay à 100m de Orange ml</p>

                 </div>
                </div>
                <div className={classes.container__address__containte}>
                    

                    <div className={classes.detail__div}>
                    <FaPhoneVolume  className={classes.icon} />
                    <p>+223 20 25 30 30</p>
                 </div>


                    <div className={classes.detail__div}>
                    <FaMapMarkerAlt className={classes.icon} />
                    <p className={classes.address}> Faladie en face du marché</p>

                 </div>
                </div>
                <div className={classes.container__address__containte}>
                    

                    <div className={classes.detail__div}>
                    <FaPhoneVolume  className={classes.icon} />
                    <p>+223 73 70 11 11</p>
                 </div>


                    <div className={classes.detail__div}>
                    <FaMapMarkerAlt className={classes.icon} />
                    <p className={classes.address}> Hippodrome 2 près de train</p>

                 </div>
                </div>
            </div>

            <form className={classes.form__container}>
                <h3> Envoyer-nous un message</h3>
                <div className={classes.contact__inputbox}>
                    <label htmlFor="name">Nom complèt</label>
                    <input type="text" required name="fullname" id="name" />
                </div>
                <div className={classes.contact__inputbox}>
                    <label htmlFor="phone">Téléphone</label>
                    <input  type="number" required name="phone" id="phone" />
                </div>
                <div className={classes.contact__inputbox}>
                    <label htmlFor="message">Message</label>
                    <textarea  required name="message" id="message" placeholder="quel message souhaitez-vous nous faire parvenir ?"/>
                </div>
                <button className={classes.contact__btn}>Envoyer </button> 
            </form>
        </div>
       
        </>
    );
}

export default ContactForm;