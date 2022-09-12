import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col} from 'react-bootstrap';

const Book = ({
                  title, description, img_src,handleFavouritesClick
              }) => {
    return (
        <Col>
            <Card bg={"Dark".toLowerCase()} height="30"
                  key={"Dark"}
                  text={"Dark".toLowerCase() === 'light' ? 'dark' : 'white'}
                  style={{width: '260px', height: "1000px"}}>
                <div className='image-container d-flex justify-content-start m-1'>
                    <Card.Img variant="top" src={img_src}/>
                    <div onClick={()=>{
                        handleFavouritesClick();
                    }} className='overlay d-flex align-items-center justify-content-center'>
                        Add to favorites
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="m-lg-1 bi bi-balloon-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/>
                        </svg>
                    </div>
                </div>
                <Card.Body>
                    <Card.Title class="text-warning">{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="warning">Watch</Button>{' '}
                </Card.Footer>
            </Card>
        </Col>
    );
};


export default Book;
