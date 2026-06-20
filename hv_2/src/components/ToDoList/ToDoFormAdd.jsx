import React, {useState} from 'react';

const ToDoFormAdd = ({addTask}) => {
    const [newTitle, setNewTitle] = useState("");
    const [TitleError, setTitleError] = useState(null);

    const handleSubmit = () => {
        if (newTitle.length < 3) {
            setTitleError("Title must be at least 3 characters long");
            return;
        }
        
        addTask(newTitle);
    }

    return (
        <div className='form-add'>
            <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
            <button onClick={handleSubmit}>Add</button>

            {TitleError && <div style={{ color: 'red', fontSize: ".9em"  }}>{TitleError}</div>}
        </div>
    );
}

export default ToDoFormAdd;
