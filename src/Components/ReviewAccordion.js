import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Badge, Col} from 'react-bootstrap';

const ReviewAccordion = (keyword) => {
    return (
        <div>
            <Badge pill bg="black">
                <div className="badge-text">{keyword}</div>
            </Badge>
        </div>
    );
};


export default ReviewAccordion;
