import React from 'react';
import API from '../../utils/API';

import './style.css'

export default function BookCard(props) {

    const saveBook = () => {
        API.saveBook({
            title: props.title,
            authors: props.authors,
            description: props.description,
            image: props.image,
            link: props.link
        })
        .then(() => props.setSearchState({ bookTitle: "", bookArr: [] }))
        .catch(err => console.log(err))
    }

    return (
        <div className="media-object stack-for-small" id={props.key}>
            <div className="media-object-section">
                <img className="thumbnail" alt="img" src={props.image}/>
            </div>
            <div className="media-object-section">
                <h5>{props.title}</h5>
                <h6>{props.authors}</h6>
                <p>{props.description}</p>
                <a href={props.link} target="blank"><button type="button" className="btn btn-primary btn-sm">View</button></a>
                <button type="button" onClick={saveBook} className="btn btn-secondary btn-sm">Save</button>
            </div>
        </div>
    )
}
