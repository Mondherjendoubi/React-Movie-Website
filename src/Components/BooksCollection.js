import React, {useEffect, useRef, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Book from "./Book";
import Col, {Button, Form} from "react-bootstrap";
import {BrowserRouter as Router} from "react-router-dom";
import Card from "react-bootstrap/Card";

function BooksCollection(props) {
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState('');
    const ref = useRef(null);


    return (
        <div>
            {books.length>0 && books.map(book => (
                <Card key={book.id} style={{width: '18rem'}}>
                    <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail}/>
                    <Card.Body>
                        <Card.Title class="text-warning">{book.volumeInfo.title}</Card.Title>
                        <Card.Text>
                            {book.volumeInfo.description}
                        </Card.Text>
                        <Button variant="primary">Add to card</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default BooksCollection;
