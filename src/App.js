import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import NavigationBar from "./Components/NavigationBar";
import Book from "./Components/Book";
import BooksCollection from "./Components/BooksCollection";
import UpcomingMovies from "./Components/UpcomingMovies";
import TopRatedMovies from "./Components/TopRatedMovies";
import PopularMovies from "./Components/PopularMovies";
import Movie from "./Components/Movie";
import TrendingMovies from "./Components/TrendingMovies";
import FavouriteMovies from "./Components/FavouriteMovies";


function App() {
    return (
        <div className="app  bg-dark text-bg-dark ">
            <NavigationBar/>
                <Router>
                    <Routes>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/upcoming-movies" element={<UpcomingMovies/>}/>
                        <Route path="/tending-movies" element={<TrendingMovies/>}/>
                        <Route path="/top-rated-movies" element={<TopRatedMovies/>}/>
                        <Route path="/popular-rated-movies" element={<PopularMovies/>}/>
                        <Route path="/favourite-Movies" element={<FavouriteMovies/>}/>
                    </Routes>
                </Router>
        </div>
    );
}

export default App;
