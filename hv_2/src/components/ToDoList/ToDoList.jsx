import React, {useState} from 'react';
import ToDoFormAdd from './ToDoFormAdd';
import Filters from './Filters';
import Item from './Item';
import Modal from '../modal/Modal';
import {nanoid} from 'nanoid';

const items = [
    {
        id: 1,
        title: "Learn HTML",
        done: true
    },

    {
        id: 2,
        title: "Learn CSS",
        done: true
    },

    {
        id: 3,
        title: "Learn JS",
        done: true
    },

    {
        id: 4,
        title: "Learn React",
        done: true
    }
]

const ToDoList = () => {
    const [tasks, setTasks] = useState(items);

    const addTask = (value) => {
        setTasks([...tasks, { id: nanoid(), title: value, done: false }]);
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(item => item.id !== id));
    }

    const toggleDone = (id) => {
        setTasks(tasks.map(item => item.id === id ? {...item, done: !item.done} : item));
    }

    const updateTaskTitle = (id, title) => {
        setTasks(tasks.map(item => item.id === id ? {...item, title} : item));
    }

    return (
        <div className='container-todo'>
            <h1>ToDo List</h1>

            <ToDoFormAdd addTask={addTask}/>

            <div className='todo'>
                <Filters />

                <div className="list">
                    { tasks.map(item => (
                        <Item
                            item={item}
                            key={item.id}
                            removeTask={removeTask}
                            toggleDone={toggleDone}
                            updateTaskTitle={updateTaskTitle}
                        />
                    ))}
                </div>
            </div>

            <Modal visible = {true}/>
        </div>
    );
}

export default ToDoList;
