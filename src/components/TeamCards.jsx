
import { Link } from 'react-router-dom';
import classes from '../css/TeamCards.module.css';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";


function TeamCards({image, title, description }){

    return(
        <>
        <div className={classes.cards_container__card}>
            <img src={image} alt="team member" className={classes.card_image} />
         <h3>{title} </h3>
         <p> {description} </p>

         <div className={classes.icons__Box}>
            <div className={classes.cards_container__card_logo}>
            <Link to="www.facebook.com" > <CiFacebook /> </Link>
            </div>
            <div className={classes.cards_container__card_logo}>
            <Link to="www.instagram.com" ><FaInstagram /> </Link>
            </div>
                           
            <div className={classes.cards_container__card_logo}>
            <Link to="www.twitter.com" ><CiTwitter /> </Link>
            </div>
         </div>
        </div>
        </>
    );
}

export default TeamCards;