import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <h4 className='text-white'>FoodBuzz</h4>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="text-white">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">
                                <NavLink className='text-decoration-none text-white'
                                    to="/home"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Home
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link href="/meals">
                                <NavLink className='text-decoration-none text-white'
                                    to="/meals"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Meals
                                </NavLink>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;