import React, { useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import BookCard from '../components/BookCard';
import SectionTitle from '../components/SectionTitle';

export default function SearchPage() {
    const [searchState, setSearchState] = useState({
        bookTitle: "",
        bookArr: []
    });

    const handleInputChange = e => {
        const name = e.target.name;
        let value = e.target.value;

        setSearchState({
            ...searchState,
            [name]: value
        })
    }

    return (
        <div>
            <Header />
            <Search 
            handleInputChange={handleInputChange} 
            searchState={searchState}
            setSearchState={setSearchState}
            />
            <SectionTitle sectionTitle={"Results"}/>
            {searchState.bookArr.map(book => (
                <BookCard 
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    link={book.volumeInfo.infoLink}
                />
            ))}
        </div>
    )
}
