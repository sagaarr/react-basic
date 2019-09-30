import React from 'react';

function Card(props) {
    
    return (
        <div className="bg-light-red dib br3 pa3 ma2 grow">
            <img  alt="Something" src={`https://robohash.org/${props.id}?200x200`} />
           <div>
           <h2>{props.name}</h2>
            <p>{props.email}</p>
           </div>
        </div>
    )
}

export default Card