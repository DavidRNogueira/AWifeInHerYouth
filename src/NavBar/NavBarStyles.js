import styled from "styled-components"
import {Link} from "react-router-dom"

export const NavBarDiv = styled.div `
    background-color:#f3dfe3;
`

export const BlogName = styled.h1 `
    font-size:5em;
    margin:0;
    text-align:center;
`
export const PagesMenu = styled.div `
    background-color:lightgrey;
    display:flex;
    justify-content:space-evenly;
`
export const PagesMenuOption = styled(Link) `
    color:black;
    font-size:2em;
    margin-top:0.5em;
    margin-bottom:0.5em;
    text-decoration:none;

`