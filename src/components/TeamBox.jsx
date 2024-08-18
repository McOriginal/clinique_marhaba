import classes from '../css/TeamBox.module.css'
import TeamCards from './TeamCards';

import docteur1 from '../images/docteur1.jpg'
import docteur2 from '../images/docteur2.jpg'
import docteur3 from '../images/docteur3.jpg'
import docteur4 from '../images/docteur4.jpg'

function TeamBox(){

    return(
        <>
        <section>
            <div className={classes.team__container}> 
                <div className={classes.team__containte}>
                    <p className={classes.p1}>Nos Spécialiste</p>
                    <p className={classes.p2}>Notre équipe de professionnels de la santé hautement qualifiés s'efforce de garantir le bien-être de chaque patient à travers une approche personnalisée.</p>

                </div>
                </div>

                <div className={classes.team_card_box}>
                <TeamCards
                image={docteur1}
                title="Dr.Cissé Youssouf"
                description="Infrimier Chef"
                />
                <TeamCards
                image={docteur2}
                title="Zeinab achraf"
                description="Sage Femme"
               
                />
                <TeamCards
                image={docteur3}
                title="Micheal douclas"
                description="Laboratain"
               
                />
                <TeamCards
                image={docteur4}
                title="Helena Bernadette"
                description="Infirmière Echographie"
                
                />

            </div>
        </section>
        </>
    );
}

export default TeamBox;