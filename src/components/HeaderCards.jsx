import classes from '../css/HeaderCards.module.css';


function HeaderCards({cardLogo, title, description}){
    return(
        <>
        <div className={classes.cards_container__card}>
         <div className={classes.cards_container__card_logo}>
            {cardLogo}
         </div>
         <h3>{title} </h3>
         <p> {description} </p>
        </div>
        </>
    );
}


export default HeaderCards;