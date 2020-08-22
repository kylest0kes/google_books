import React from 'react';
import './style.css'

export default function BookCard(props) {
    return (
        <div className="media-object stack-for-small">
            <div className="media-object-section">
            <img className="thumbnail" alt="img" src={props.image}/>
            </div>
            <div className="media-object-section">
                <h5>{props.title}</h5>
                <h6>{props.authors}</h6>
                <p>{props.description}</p>
                <a href={props.link} target="blank"><button type="button" className="btn btn-primary btn-sm">View</button></a>
                <button type="button" className="btn btn-secondary btn-sm">Save</button>
            </div>
        </div>
    )
}
