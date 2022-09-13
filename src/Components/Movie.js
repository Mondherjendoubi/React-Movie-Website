import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRef} from 'react';
import {
    Row,
    Badge,
    Alert,
    Col,
    Button,
    CardGroup,
    Form,
    FormControl,
    Container,
    Card,
    ListGroup,Carousel,Accordion
} from 'react-bootstrap';
import BooksCollection from "./BooksCollection";
import Book from "./Book";
import HomeNavigation from "./HomeNavigation";
import fetchBooks from "./Home"
import ReviewAccordion from "./ReviewAccordion";

function Movie(props) {
    const [movie, setMovie] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [keyWords, setKeyWords] = useState([]);
    const [movieVideos, setMovieVideos] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [favArray, setFavArray] = useState([]);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=291c267c5e08453f902d2059428d0d01&language=en-US&page=1&include_adult=false&query=${props.input}`;
    let imgUrl = "https://image.tmdb.org/t/p/original";
    let youtubeURl="https://www.youtube.com/embed/";

    function chooseSimilarMovie(index){
        if(similarMovies[index] == null){
            console.log("do nthing")
        }else{
            let Array=[];
            Array.push(similarMovies[index]);
            setMovie(Array);
        }
    }

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

    const fetchBooks = ((Url, callBack) => {
        console.log("entered");
        fetch(Url)
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    console.log(Url);
                    callBack(data.results);
                    console.log(data.results);
                }

            }).catch(
            () => {
                console.log("Error");
            }
        );
    });
    useEffect(() => {
        fetchBooks(url, setMovie);
        setFavourites(JSON.parse(window.localStorage.getItem("react bruv")));
    }, [props.input])
    useEffect(() => {
        setTimeout(() => {
            console.log("picURL");
            console.log(movie);
            let picsUrl = `https://api.themoviedb.org/3/movie/${movie[0].id}/similar?api_key=291c267c5e08453f902d2059428d0d01&language=en-US&page=1`;
            let keyWordsUrl = `https://api.themoviedb.org/3/movie/${movie[0].id}/keywords?api_key=291c267c5e08453f902d2059428d0d01`
            let videoUrl=`https://api.themoviedb.org/3/movie/${movie[0].id}/videos?api_key=291c267c5e08453f902d2059428d0d01&language=en-US`;
            fetchBooks(picsUrl, setSimilarMovies);
            fetchBooks(keyWordsUrl, setKeyWords);
            fetchBooks(videoUrl, setMovieVideos);
            console.log("SimilarMovies");
            console.log(similarMovies);
            console.log("keys");
            console.log(keyWords);
            console.log("videos");
            console.log(movieVideos);
        }, 10);
        setFavourites(JSON.parse(window.localStorage.getItem("react bruv")));
    }, [movie,props.input])
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={0}>
                        <div className="Movie">
                            <div className="img">
                                <Col>
                                    <div className='image-container d-flex justify-content-start m-3'>
                                        <img className="img-fluid rounded float-left " variant="bottom"
                                             src={movie[0] == null ? "nothing" : imgUrl + "/" + movie[0].poster_path}/>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <Button div onClick={()=>{
                                            addToFav(movie[0].id, movie[0].title, movie[0].poster_path, movie[0].overview)
                                        }}
                                            className="button-85" size="lg">
                                            Add to Favorites
                                        </Button>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="title ">
                            <h1 className=" text-center m-3 ">
                                {movie[0] == null ? "empty" : movie[0].title}
                            </h1>
                            <div className=" d-flex flex-row">
                                <div>
                                    <Badge pill bg="black">
                                        <div className="badge-text">Original Language</div>
                                    </Badge>
                                </div>
                                <div><h6
                                    className="m-lg-1 mb-3">{movie[0] == null ? "empty" : movie[0].original_language}</h6>
                                </div>
                            </div>
                            <div className="d-flex flex-row">
                                <div>
                                    <Badge pill bg="black" className="text-dark ">
                                        <div className="badge-text">Popularity</div>
                                    </Badge>
                                </div>
                                <div><h6 className="m-lg-1 mb-3">{movie[0] == null ? "empty" : movie[0].popularity}</h6>
                                </div>
                            </div>
                            <div className="d-flex flex-row">
                                <div>
                                    <Badge pill bg="black" className="text-dark ">
                                        <div className="badge-text">Release Date</div>
                                    </Badge>
                                </div>
                                <div><h6
                                    className="m-lg-1 mb-3">{movie[0] == null ? "empty" : movie[0].release_date}</h6>
                                </div>
                            </div>
                            <div className="d-flex flex-row">
                                <div>
                                    <Badge pill bg="black" className="text-dark ">
                                        <div className="badge-text">Vote average</div>
                                    </Badge>
                                </div>
                                <div><h6
                                    className="m-lg-1 mb-3">{movie[0] == null ? "empty" : movie[0].vote_average}</h6>
                                </div>
                            </div>
                            <div className="d-flex flex-row">
                                <div>
                                    <Badge pill bg="black" className="text-dark ">
                                        <div className="badge-text"> Vote Count</div>
                                    </Badge>
                                </div>
                                <div><h6 className="m-lg-1 mb-3">{movie[0] == null ? "empty" : movie[0].vote_count}</h6>
                                </div>
                            </div>


                            <div className="summary"></div>
                            <div className="summarytitle ">
                                <h3 className="text-center m-3">Plot summary</h3>
                                <h8>{movie[0] == null ? "empty" : movie[0].overview}</h8>
                            </div>
                            <h3>Trailer</h3>
                            <div className="ratio ratio-16x9 mb-3">
                                <iframe className="embed-responsive-item" src={movieVideos[0]== null ? "nothing" : youtubeURl+ movieVideos[0].key}
                                        allowFullScreen></iframe>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <Container>
                            <h3 className="text-center m-2 ">Similar Movies</h3>
                            <Row className="m-1">
                                <Col>
                                    <div className='image-container d-flex justify-content-start m-1'>
                                        <img className="img-fluid rounded float-left " variant="bottom"
                                             onClick={()=>{
                                                 chooseSimilarMovie(0);
                                             }}
                                             src={similarMovies[0] == null ? "https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg" : imgUrl + "/" + similarMovies[0].poster_path}/>
                                    </div>
                                </Col>

                                <Col>
                                    <div className='image-container d-flex justify-content-start m-1'>
                                        <img className="img-fluid rounded float-left " variant="bottom"
                                             onClick={()=>{
                                                 chooseSimilarMovie(1);
                                             }}
                                             src={similarMovies[0] == null ? "https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg" : imgUrl + "/" + similarMovies[1].poster_path}/>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="m-1">
                                <Col>
                                    <div className='image-container d-flex justify-content-start m-1'>
                                        <img className="img-fluid rounded float-left " variant="bottom"
                                             onClick={()=>{
                                                 chooseSimilarMovie(2);
                                             }}
                                             src={similarMovies[0] == null ? "https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg" : imgUrl + "/" + similarMovies[2].poster_path}/>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='image-container d-flex justify-content-start m-1'>
                                        <img className="img-fluid rounded float-left " variant="bottom"
                                             onClick={()=>{
                                                 chooseSimilarMovie(3);
                                             }}
                                             src={similarMovies[0] == null ? "https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg" : imgUrl + "/" + similarMovies[3].poster_path}/>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="m-1">
                                <Col>
                                    <div className='image-container d-flex justify-content-start m-1'>
                                        <img className="img-fluid rounded float-left " variant="bottom"
                                             onClick={()=>{
                                                 chooseSimilarMovie(4);
                                             }}
                                             src={similarMovies[0] == null ? "https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg" : imgUrl + "/" + similarMovies[4].poster_path}/>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='image-container d-flex justify-content-start m-1'>
                                        <img className="img-fluid rounded float-left " variant="bottom"
                                             onClick={()=>{
                                                 chooseSimilarMovie(5);
                                             }}
                                             src={similarMovies[0] == null ? "https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg" : imgUrl + "/" + similarMovies[5].poster_path}/>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default Movie;
