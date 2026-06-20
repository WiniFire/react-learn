import React, { useState } from 'react';
import "./Modal.css";

const Modal = ({visible}) => {
    const [show, setShow] = useState(visible);

    return (
        <div className={show ? "modal-bg visible" : "modal-bg"}>
            <div className="modal">
                <button onClick={() => setShow(false)}>Close</button>
                <h1></h1>
            </div>
        </div>
    );
}

export default Modal;
