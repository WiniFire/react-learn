import React, {useEffect, useState} from 'react';

const Second = () => {
    const [text, setText] = useState("welcome");

    const [user, setUser] = useState({name: "Jhon", age: 30});

    useEffect(() => {
        console.log("useEffect");

        return () => {
            console.log("Убираем");
        }
    }, [user]);

    const handleChangeName = () => {
        setUser({...user, name: text})
    }

    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={handleChangeName}>Change</button>

            <div>
                {user.name}, {user.age}
            </div>
        </div>
    );
}

export default Second;
