import React, {useRef, useState} from 'react';

const Item = ({item, removeTask, toggleDone, updateTaskTitle}) => {
    const [isEditable, setIsEditable] = useState(false);
    const [title, setTitle] = useState(item.title);
    const shouldCancelBlur = useRef(false);

    const handleChecked = () => {
        toggleDone(item.id);
    };

    const saveTitle = () => {
        const trimmedTitle = title.trim();

        if (!trimmedTitle) {
            setTitle(item.title);
            setIsEditable(false);
            return;
        }

        updateTaskTitle(item.id, trimmedTitle);
        setTitle(trimmedTitle);
        setIsEditable(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            saveTitle();
        }

        if (e.key === 'Escape') {
            shouldCancelBlur.current = true;
            setTitle(item.title);
            setIsEditable(false);
        }
    };

    const handleBlur = () => {
        if (shouldCancelBlur.current) {
            shouldCancelBlur.current = false;
            return;
        }

        saveTitle();
    };

    return (
        <div className="item">
            <input type='checkbox' checked={item.done} onChange={handleChecked}/>
            {isEditable ? (
                <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    autoFocus
                />
            ) : (
                <span className={`task-title ${item.done ? "done" : ""}`} onClick={() => setIsEditable(true)}>
                    {item.title}
                </span>
            )}
            <button className='remove-btn' onClick={() => removeTask(item.id)}>Delete</button>
        </div>
    );
}

export default Item;
