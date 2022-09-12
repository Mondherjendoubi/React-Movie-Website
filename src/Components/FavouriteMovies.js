import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRef} from 'react';
import {Row, Button, CardGroup, Form, FormControl, Container} from 'react-bootstrap';
import BooksCollection from "./BooksCollection";
import Book from "./Book";
import HomeNavigation from "./HomeNavigation";
import fetchBooks from "./Home"

function FavouriteMovies(props) {
    let imgUrl = "https://image.tmdb.org/t/p/original";
    const [books, setBooks] = useState([]);
    let array=[];
    useEffect(() => {
        setBooks(JSON.parse(window.localStorage.getItem("react bruv")));
        console.log(books)
        array=books;
        array.filter((item,
                           index) => array.indexOf(item) === index)
        console.log("books after");
        console.log(JSON.stringify(array));
    }, []);
    return (
        <div>
            <Container fluid="md">
                <HomeNavigation/>
                <Row xs={0} md={5} className="g-2">
                    {books &&
                    books.map((c) => (
                        <Book
                            key={c.id}
                            id={c.id}
                            description={c.description}
                            title={c.title || c.name}
                            img_src={imgUrl + "/" + c.imgsrc}
                        />
                    ))}
                </Row>
            </Container>


        </div>
    );
}


export default FavouriteMovies;
