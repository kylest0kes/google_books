import React from 'react';
import GoogleBooksAPI from '../../utils/GoogleBooksAPI';

import './style.css';

export default function Search(props) {
    const formSubmit = e => {
        e.preventDefault();
        console.log("working")
        GoogleBooksAPI.search(props.searchState.bookTitle)
            .then(result => {
                console.log(result.data.items[0].volumeInfo)
                props.setSearchState({ ...props.searchState, bookTitle: "" });
                props.setSearchState({ ...props.searchState, bookObj: {title: result.data.items[0].volumeInfo.title}})
            })
            .then(() => console.log(props.searchState.bookObj))
            .catch(err => console.log(err))
    }

    return (
        <div className="search">
            <h4>Search your favorite books here!</h4>
            <div className="input-group input-group-rounded">
                <input className="input-group-field" onChange={props.handleInputChange} value={props.searchState.bookTitle} name="bookTitle" type="search"/>
                <div className="input-group-button">
                    <input type="submit" onClick={formSubmit} className="button secondary" value="Search"/>
                </div>
            </div>
        </div>
    )
}
