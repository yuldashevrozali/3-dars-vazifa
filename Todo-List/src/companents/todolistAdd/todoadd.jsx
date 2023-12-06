import React, { useState } from 'react';
import './todoadd.css';

function Add() {
    const [showHello, setShowHello] = useState(false);

    function handleClick() {
        setShowHello(!showHello);
    }

    function handleChange(event) {
        console.log(event.target.value);
    }

    return (
        <div className="qushish">
            <h1>TO-DO LIST</h1>
            <form className='form'>
                <input onChange={handleChange} placeholder='Enter To Do...' type="text" />
                <input id='input' onClick={handleClick} type="button" value="ADD" />
            </form>
            {showHello && <h1>Hello</h1>}
        </div>
    );
}

export default Add;
