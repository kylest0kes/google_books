import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import BookCard from '../components/BookCard'
import SectionTitle from '../components/SectionTitle';

export default function SearchPage() {
    return (
        <div>
            <Header />
            <Search />
            <SectionTitle sectionTitle={"Results"}/>
            <BookCard />
            <BookCard />
        </div>
    )
}
