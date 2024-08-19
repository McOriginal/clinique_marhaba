import classes from '../css/Navigation.module.css'
import logo from '../images/logo-clinic.png';
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from 'react';


function NavigationLinks(){

    const [openMenu, setOpenMenu] = useState(false);
   
    const showMenu = () =>{
        setOpenMenu(true);
    }

    function close(){
        setOpenMenu(false);
    }

    return(
        <>
         <nav className={classes.nav_box}>
            <div className={classes.box_logo}>
            <img src={logo} alt="logo" />
            <h1 className={classes.nav__title}>Santé <span>Marhaba</span></h1>
            </div>
           <div className={`${openMenu ? classes.open_navLinks : classes.navLinks}`} >
           <ul>
                <li>
                    <NavLink to='mcoriginal.github.io/clinique_marhaba/' className={(({isActive}) => isActive ? classes.active : undefined)} end>Accueil</NavLink>
                </li>
                <li>
                    <NavLink to='mcoriginal.github.io/clinique_marhaba/apropos' className={(({isActive} )=> isActive ? classes.active : undefined)} end>A propos</NavLink>
                </li>
                <li>
                    <NavLink to='mcoriginal.github.io/clinique_marhaba/contact' className={(({isActive}) => isActive ? classes.active : undefined)} end>Contacts</NavLink>
                </li>
        <IoMdCloseCircleOutline
        className={classes.closeIcon}
        onClick={close}/>
        
            </ul>
           </div>
        <div className={classes.btn__box}>
        <GiHamburgerMenu className={classes.menu} id='menu' onClick={showMenu} />
        </div>
        </nav>
       </>
    );
}


export default NavigationLinks;