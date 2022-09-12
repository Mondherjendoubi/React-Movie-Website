import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';


function HomeNavigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Item as="li">
                        <Nav.Link className="text-warning" href="/tending-movies">
                            <div className="badge-text"> Trending</div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link className="text-warning" href="upcoming-movies">
                            <div className="badge-text"> Upcoming Movies</div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link className="text-warning" href="top-rated-movies">
                            <div className="badge-text">Top Rated Movies</div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link className="text-warning" href="/popular-rated-movies">
                            <div className="badge-text">Popular Movies</div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link className="text-warning" href="/favourite-Movies">
                            <div className="badge-text">Favourite Movies</div>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
);
}

export default HomeNavigation;
