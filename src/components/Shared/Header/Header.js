import logo from '../../../logo.png';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='header'>
            <Navbar fixed='top' collapseOnSelect expand="lg" bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img src={logo} height="30px" alt="" />
                        Happy Clicking</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#FAQ">FAQ</Nav.Link>
                            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>

                        </Nav>

                        <Nav>
                            <Nav.Link as={Link} to='about'>About</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-dark text-white text-decoration-none' onClick={handleSignOut}>SignOut</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;