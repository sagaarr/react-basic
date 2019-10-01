import React from 'react';


const Scroll = (props) => {
    console.log("From children")
    
    return(
        <div style={{'overflowY': 'Scroll', 'border': '1px solid black', 'height':'800px'}}>
            {props.children}
        </div>
    )
}




export default Scroll;