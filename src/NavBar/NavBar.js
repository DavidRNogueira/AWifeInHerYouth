import React from "react"
import { NavBarDiv, BlogName, PagesMenu, PagesMenuOption } from "./NavBarStyles";

const NavBar = () => {
    return(
        <>
        <NavBarDiv>
            <BlogName>A Wife in Her Youth</BlogName>
        </NavBarDiv>
        <PagesMenu>
            <PagesMenuOption to="/About">
                Home
            </PagesMenuOption>
            <PagesMenuOption to="/About">
                About
            </PagesMenuOption>
            <PagesMenuOption to="/About">
                Blog
            </PagesMenuOption>
            <PagesMenuOption to="/About">
                Shop
            </PagesMenuOption>
        </PagesMenu>
        </>
    )
}

export default NavBar;