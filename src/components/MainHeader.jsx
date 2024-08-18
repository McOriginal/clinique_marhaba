import { Outlet } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";


function MainHeader(){

    return(
        <>
        <NavigationLinks />
        <Outlet />
        </>
    );
}

export default MainHeader;