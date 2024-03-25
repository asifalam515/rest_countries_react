import React, { useState } from 'react';

const EventHandler = () => {
    const [count, setCount] = useState(0)
    function increaseHandler(){
       const newCount= count+1
        setCount(newCount)
    }
    return (
        <div>
           <h1>Counter : {count} </h1> 
           <button onClick={increaseHandler}>Increase</button>
        </div>
    );
};

export default EventHandler;