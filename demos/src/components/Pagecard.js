import React from "react";

import "./pagecard.css";

const PageCard = ({ image, name, content }) => {
    return (
        <div className='card'>
            <div className='card_image'>
                <img src={image} alt={name} />
            </div>
            <div className='card_info'>
                <h2>{name}</h2>
                <h3>{content}</h3>
            </div>
        </div>
    );
};

export default PageCard;