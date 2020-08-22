import React from 'react';
import { Link } from "react-router-dom";
import './style.css'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h5>Google Book Search</h5>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/">Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/saved">Saved</Link>
                    </li>
                    </ul>
                </div>
            </nav>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Google Book Search</h1>
                </div>
            </div>
        </div>
    )
}
