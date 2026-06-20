import React, { useState } from 'react';

const First = () => {

    const [i, setI] = useState(1);
    const [visibleSpoiler, setVisibleSpoiler] = useState(false);

    const toggleSpoiler = function()
    {
        setVisibleSpoiler(!visibleSpoiler)
    }

    const increment = function()
    {
        setI(i + 1);
    }

    const decrement = function()
    {
        setI(i - 1);
    }
    
    return (
        <div>
            <h1>First</h1>

            <button onClick={toggleSpoiler}>Show Spoiler</button>
            {visibleSpoiler && <div>Spoiler</div>}

            <hr />

            <button onClick={decrement}>-</button>
            <b>{i}</b>
            <button onClick={increment}>+</button>
        </div>
  );
}

export default First;
