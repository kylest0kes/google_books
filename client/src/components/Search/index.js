import React from 'react';
import './style.css';

export default function Search() {
    return (
        <div className="search">
            <h4>Search your favorite books here!</h4>
            <div className="input-group input-group-rounded">
                <input className="input-group-field" type="search"/>
                <div className="input-group-button">
                    <input type="submit" className="button secondary" value="Search"/>
                </div>
            </div>
        </div>
    )
}
