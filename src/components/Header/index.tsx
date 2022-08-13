import React from "react";

import { Container } from "./Styles";

import logo from './assets/logo.png'

const Header: React.FC = () => {
    return(
        <Container>
            <img src={logo}/>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>What's New</li>
                <li>Contact</li>
            </ul>
        </Container>

    );
}

export default Header;