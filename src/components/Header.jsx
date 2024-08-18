
import classes from '../css/Header.module.css';
import { useRef } from 'react';
import ShowDialogue from './ShowDialogue';


function Header(){

    const dialog = useRef();

    function ShowDialogHandle(){
        dialog.current.open();
    }


    return(
        <>
        <ShowDialogue title="Nos salles de soins" ref={dialog} />
        <header >
            <div className={classes.header__container}> 
            <img src="https://i.pinimg.com/564x/ef/9a/02/ef9a02e9e8a14cce56acf8d6e9ff8717.jpg" alt="doctor" />
                <div className={classes.box_img}>
                </div>
                <div className={classes.header__containte}>
                    <p className={classes.p1}>Rejoignez-nous</p>
                    <h1>Votre partenaire santé de confiance au cœur de la ville. </h1>
                    <p className={classes.p2}>Au-delà de la guérison, notre mission est de vous offrir un espace où le bien-être et la santé sont au cœur de nos priorités. Située au cœur de la ville</p>  
                </div>

                <div className={classes.box_btn}>
                    <button className={classes.header_btn}>Prendre un rendez-vous</button>
                    <button onClick={ShowDialogHandle} className={classes.header_btn}>Voire nos salles</button>

                    </div>

                
            </div>
        </header>
        </>
    );
}

export default Header;