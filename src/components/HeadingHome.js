import React from 'react'
import { Link } from 'react-router-dom';
import{
Navbar,
Nav,
NavItem,
NavbarBrand,
Container
} from 'react-bootstrap';


export const HeadingHome = () => {
    return (
<Navbar color="dark" dark>
<Container>
<NavbarBrand href="/">Player Database for Nashua Youth Soccer</NavbarBrand>
<Nav>
<NavItem>
<Link className="btn btn-primary" to="/add">Add Player</Link>
</NavItem>
</Nav>
</Container>
</Navbar>
    )
}