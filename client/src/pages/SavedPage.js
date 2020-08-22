import React from 'react';
import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import BookCard from '../components/BookCard';


export default function SavedPage() {
    return (
        <div>
            <Header />
            <SectionTitle sectionTitle={"Saved"}/>
            <BookCard />
        </div>
    )
}
