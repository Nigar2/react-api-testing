import React from "react";

import "./pagecard.css";

const PageCard = ({ image, name, content }) => {
    const reversed= [PageCard].reverse();
    return (
        <div className="cards">
             {
                reversed.map((index)=>{
                    return(               
                        <div className='card' key={index}>
            <div className='card_image'>
                <img src={image} alt={name} />
            </div>
            <div className='card_info'>
                <h2>{name}</h2>
                <h3>{content}</h3>
            </div>
            
        </div>
                    )
                })
            }            
            
        </div>
       
    );
};

export default PageCard;