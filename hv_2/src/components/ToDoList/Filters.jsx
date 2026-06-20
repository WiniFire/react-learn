import React from 'react';

const Filters = ({ setActiveFilter, activeFilter}) => {
    return (
        <div className='filters'>
            {/* <button onClick={()=>setActiveFilter("all")} style={{backgroundColor: activeFilter == "all"? "dodgerblue" : #dddd}}>All</button>
            <button onClick={()=>setActiveFilter("todo")} style={{backgroundColor: activeFilter == "todo"? "dodgerblue" : #dddd}}>ToDo</button>
            <button onClick={()=>setActiveFilter("done")} style={{backgroundColor: activeFilter == "done"? "dodgerblue" : #dddd}}>Done</button> */}
        </div>
    );
}

export default Filters;
