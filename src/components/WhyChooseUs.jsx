import classes from '../css/WhyChooseUs.module.css';
import { FaCheckCircle } from "react-icons/fa";
import docteurImg from '../images/dc.png';


function WhyChooseUs(){

    return(
        <>
         <section>
            <div className={classes.section__container}> 
              

                <div className={classes.box_img}>
                    <img src={docteurImg} alt="docteur" />
                    
                </div>
                
                <div className={classes.section__containte}>
                    <p className={classes.p1}>Choisissez-nous</p>
                    <h1>Pourquoi nous choisir </h1>
                        <ul>
                            <li>
                                <FaCheckCircle className={classes.icon} />
                                <h4>Soins Personnalisés.</h4>
                            </li>
                            <li>
                                <FaCheckCircle className={classes.icon} />
                                <h4>Équipe de Professionnels.</h4>
                            </li>
                            <li>
                                <FaCheckCircle className={classes.icon} />
                                <h4>Approche Holistique.</h4>
                            </li>
                            <li>
                                <FaCheckCircle className={classes.icon} />
                                <h4>Environnement Accueillant.</h4>
                            </li>
                            <li>
                                <FaCheckCircle className={classes.icon} />
                                <h4>Engagement envers la Qualité.</h4>
                            </li>
                            
                        </ul>

                        
                        
                    
                </div>
            </div>
            

            
        </section>
        
        </>
    );
}

export default WhyChooseUs;