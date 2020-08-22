import React, { useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import BookCard from '../components/BookCard'
import SectionTitle from '../components/SectionTitle';

export default function SearchPage() {
    const [searchState, setSearchState] = useState({
        title: ""
    });

    const handleInputChange = e => {
        const name = e.target.name;
        let value = e.target.value;

        setSearchState({
            [name]: value
        })
    }

    return (
        <div>
            <Header />
            <Search 
            handleInputChange={handleInputChange} 
            searchState={searchState}
            />
            <SectionTitle sectionTitle={"Results"}/>
            <BookCard />
        </div>
    )
}
