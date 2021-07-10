import React from 'react'
import { Link } from 'react-router-dom';
import{
Navbar,
Nav,
NavItem,
NavbarBrand,
Container
} from 'react-bootstrap';


export const Heading = () => {
    return (
<Navbar color="dark" dark>
<Container>
<NavbarBrand href="/">Player Database for Nashua Youth Soccer</NavbarBrand>
<Nav>
<NavItem>
</NavItem>
</Nav>
</Container>
</Navbar>
    )
}