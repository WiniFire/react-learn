import React, {useState} from 'react';
import CounterValue from './CounterValue';
import IsFive from './IsFive';

const Counters = () => {
    const [counter1, setCounter1] = useState(1);
    const [counter2, setCounter2] = useState(2);

    return (
        <div>
            <div>
                <button onClick={() => setCounter1(counter1 + 1)}>+</button>
                <CounterValue value={counter1} id="counter1" />
                <button onClick={() => setCounter1(counter1 - 1)}>-</button>
            </div>

            <div>
                <button onClick={() => setCounter2(counter2 + 1)}>+</button>
                <CounterValue value={counter2} id="counter2" />
                <button onClick={() => setCounter2(counter2 - 1)}>-</button>
                <IsFive value={counter2} />
            </div>
        </div>
    );
}

export default Counters;
