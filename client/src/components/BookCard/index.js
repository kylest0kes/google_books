import React from 'react';
import './style.css'

export default function BookCard() {
    return (
        <div className="media-object stack-for-small">
            <div className="media-object-section">
            <img className="thumbnail" alt="img" src="https://placehold.it/200x200"/>
            </div>
            <div className="media-object-section">
                <h5>Book Title</h5>
                <h6>Book Author</h6>
                <p>Book Bio</p>
                <button type="button" className="btn btn-primary btn-sm">View</button>
                <button type="button" className="btn btn-secondary btn-sm">Save</button>
            </div>
        </div>
    )
}
