import React from "react";

import "./pagecard.css";

const PageCard = ({ image, name, content }) => {
    const reversed= [PageCard].reverse();
    return (
        
             {
                reversed.map((index)=>(
                                  
                        <div className='card'{ index % 2 ?(
            <div className='card_image'>
                <img src={image} alt={name} />
            </div>
            <div className='card_info'>
                <h2>{name}</h2>
                <h3>{content}</h3>
            </div>
                        )
            }

      
                )
                )
            }            
            
        </div>
       
    );
};

export default PageCard;