import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRef} from 'react';
import {Row, Button, CardGroup, Form, FormControl, Container} from 'react-bootstrap';
import BooksCollection from "./BooksCollection";
import Book from "./Book";
import HomeNavigation from "./HomeNavigation";
import fetchBooks from "./Home"

function TopRatedMovies() {
    let imgUrl = "https://image.tmdb.org/t/p/original";
    const [books, setBooks] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [favArray, setFavArray] = useState([]);
    let array = [];
    let topMoviesUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=291c267c5e08453f902d2059428d0d01&language=en-US&page=1&language=en-US&page=1";
    useEffect(() => {
        fetchBooks(topMoviesUrl);
        // eslint-disable-next-line
        setFavourites(JSON.parse(window.localStorage.getItem("react bruv")));
    }, []);

    const fetchBooks = ((Url) => {
        console.log("entered");
        let url = 'https://api.themoviedb.org/3/search/movie?api_key=291c267c5e08453f902d2059428d0d01&language=en-US&page=1&include_adult=false&query=angela';
        fetch(Url)
            .then((response) => response.json())
            .then((data) => {
                setBooks(data.results);
                array = data.results;
                console.log(array);

            }).catch(
            () => {
                console.log("Error")
            }
        );
    });

    function addToFav(id, title, poster_path, overview) {
        if (!favArray.includes(id)) {
            let myobj = {
                title: title,
                imgsrc: poster_path,
                description: overview
            }
            setFavArray([...favArray, id])
            console.log(favArray)
            const newFavouriteList = [...favourites, myobj];
            setFavourites(newFavouriteList);
            localStorage.setItem("react bruv", JSON.stringify(newFavouriteList))
            console.log(window.localStorage.getItem("react bruv"));
        }
    }

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
                            description={c.overview}
                            title={c.title || c.name}
                            img_src={imgUrl + "/" + c.poster_path}
                            handleFavouritesClick={() => {
                                addToFav(c.id, c.title, c.poster_path, c.overview)
                            }}
                        />
                    ))}
                </Row>
            </Container>
        </div>
    );
}


export default TopRatedMovies;
