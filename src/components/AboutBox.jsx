import aboutImage from '../images/aboutImage.jpg';
import classes from '../css/AboutBox.module.css';

function AboutBox(){

    return(
        <>
        <section>
            <div className={classes.about__container}> 
                <div className={classes.about__containte}>
                    <p className={classes.p1}>Qui somme-nous</p>
                    <h1>Au-delà de la guérison, notre mission est de vous offrir un espace où le bien-être et la santé sont au cœur de nos priorités. </h1>
                    <p className={classes.p2}> la clinique Marhaba, nous nous engageons à fournir des soins de qualité exceptionnelle dans un environnement chaleureux et accueillant. Notre équipe de professionnels de la santé hautement qualifiés s'efforce de garantir le bien-être de chaque patient à travers une approche personnalisée. Que ce soit pour des consultations générales, des soins spécialisés ou un accompagnement complet, la clinique Marhaba est là pour vous accompagner à chaque étape de votre parcours de santé. Votre bien-être est notre priorité.</p>

                    <div className={classes.box_btn}>
                    <button className={classes.btn}>Prendre un rendez-vous</button>
                    <button className={classes.btn}>Voire nos salles</button>

                    </div>
                </div>

                <div className={classes.box_img}>
                    <img src={aboutImage} alt="docteur" />

                </div>
            </div>
        </section>
        </>
    );
}

export default AboutBox;