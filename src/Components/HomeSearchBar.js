
import React, {useRef, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav, Navbar, Container, NavDropdown, Form} from 'react-bootstrap';


function HomeSearchBar() {
    const [input, setInput] = useState('');
    const ref = useRef(null);
    const printValues = e => {
        e.preventDefault();
        console.log(input);
        ref.current.value = '';
        // fetchBooks();
    };

    return (
        <Navbar bg="light">
            <Container>
                <Form bg="dark"
                      className="d-flex" onSubmit={printValues}>
                    <Form.Control
                        ref={ref}
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={event => setInput(event.target.value)}
                    />
                    <Button variant="warning" onClick={printValues}>Find Book</Button>{' '}
                </Form>
            </Container>
        </Navbar>

    );
}

export default HomeSearchBar;
