import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto d-flex align-items-center">

                            <Link to='/'>Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                user ? <img src={user.photoURL
                                } alt="" /> : <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            }

                            {user ?
                                <Button onClick={handleLogOut} variant="secondary">LogOut</Button>
                                : <Link to='/login'>
                                    <Button variant="secondary">LogIn</Button>
                                </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;