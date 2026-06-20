import React from 'react';

const IsFive = ( {value} ) => {
    const getResult = () => 
    {
        let i = 0;
        while (i < 1_000_000_000)
        {
            i++;
        }
    }

    return (
        <div>
            {value === 5 ? 'Is five' : 'Isnt five'}
        </div>
    );
}

export default IsFive;
