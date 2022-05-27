import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './style.css';

const Home = () => {
    const [number, setNumber] = useState(null);
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const handlechange = (event) => {
        const { value } = event.target;
        setError('');
        setNumber(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!number) {
            setError('Input is require');
        } else {
            fetch(`http://127.0.0.1:5000/api/v1/computations/${number}`)
              .then(res => res.json())
              .then(
                (result) => {
                    setResult(result?.result);
                },
                (error) => {
                    setError({error});
                }
              )
        } 
    }

    return (
        <>
            <div>
                <header className=""> 
                    <nav className="navbar fixed-top navbar-expand-lg navStyle">
                        <div className="container-fluid row">
                            <Link
                                className="navbar-brand js-scroll-trigger col-md-3"
                                to="/"
                            >
                                Computation
                            </Link>
                            <div className="account container col-md-6">
                                <div className="middlediv">
                                </div>
                            </div> 
                        </div>
                    </nav>
                </header> 
            </div>
            <div
                className="inputting"
            >
                <ul className="">
                    <div className="numberbar">
                        <input
                            className="number_input"
                            type="text"
                            name=""
                            onChange={handlechange}
                            placeholder="Type number to check..."
                        />
                        <button onClick={handleSubmit} className="button">Submit</button>
                        <div className="errormessage"><p><small>{error}</small></p></div>
                        <div className="message"><h1><small>{result}</small></h1></div>
                    </div>
                </ul>
            </div>
        </>
    );
}

export default Home;

