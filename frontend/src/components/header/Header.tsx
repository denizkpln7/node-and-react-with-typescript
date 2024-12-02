import React from 'react'
import {Badge, Navbar, Nav, Container} from "react-bootstrap";
import {NavLink} from "react-router-dom";


export default function Header() {
    return (
        <header>
            <div>
                <h1>
                    <span>Blog</span> <Badge bg="info">com</Badge>
                </h1>

            </div>
            <Navbar
                expand="lg"
                className="bg-body-tertiary"
                bg="dark"
                data-bs-theme="dark"
            >
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/blogadd">
                               Blog Add
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
};