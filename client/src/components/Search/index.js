import React from 'react';
import GoogleBooksAPI from '../../utils/GoogleBooksAPI';

import './style.css';

export default function Search() {
    const formSubmit = e => {
        e.preventDefault();
        console.log("working")
        GoogleBooksAPI.search("Harry Potter")
            .then(result => {
                console.log(result)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="search">
            <h4>Search your favorite books here!</h4>
            <div className="input-group input-group-rounded">
                <input className="input-group-field" type="search"/>
                <div className="input-group-button">
                    <input type="submit" onClick={formSubmit} className="button secondary" value="Search"/>
                </div>
            </div>
        </div>
    )
}
