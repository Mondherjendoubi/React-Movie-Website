import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRef} from 'react';
import {Row, Button, CardGroup, Form, FormControl, Container} from 'react-bootstrap';
import BooksCollection from "./BooksCollection";
import Book from "./Book";
import HomeNavigation from "./HomeNavigation";
import HomeSearchBar from "./HomeSearchBar";
import NavigationBar from "./NavigationBar";
import Movie from "./Movie";

function Home() {
    const [input, setInput] = useState('Lord of the Rings');
    let searchValue = "";
    const ref = useRef(null);
    const printValues = e => {
        e.preventDefault();
        console.log(input);
        ref.current.value = '';
        //window.location.href = "/find-movie";
        setInput(searchValue);
    };

    useEffect(() => {
        console.log("input changed")
    }, [input])

    return (
        <div>
            <HomeNavigation/>
            <Form className="d-flex bg-dark text-bg-light" onSubmit={printValues}>
                <Form.Control
                    ref={ref}
                    type="search"
                    placeholder="Search Movie"
                    className="input-search me-2 bg-dark text-light"
                    aria-label="Search"
                    onChange={event => searchValue = event.target.value}

                />
                <Button className="button-85" onClick={printValues}>Search</Button>
            </Form>
            <Movie input={input} setInput={setInput}/>
        </div>

    )
        ;
}


export default Home;
