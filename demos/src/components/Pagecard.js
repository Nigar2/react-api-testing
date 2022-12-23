import React from "react";

import "./pagecard.css";

const PageCard = ({ image, name, content,item }) => {
    const reversed= [PageCard].reverse();
    const arr=[1,2];
    return (
        <div className="cards">
             {
                 reversed.map(function(index){
                    return(               
                        <div className='card' key={index}>
            <div className='card_image' style={{order:`${item%2 == 1? arr[0]:arr[1]}`}}>
                <img src={image} alt={name} />
            </div>
            <div className='card_info' style={{order:`${item%2 == 1? arr[1]:arr[0]}`}}>
                <h2>{name}</h2>
                <h2>{item%2}</h2>
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