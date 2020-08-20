import React from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import BookCard from './components/BookCard'
import SectionTitle from './components/SectionTitle';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <SectionTitle sectionTitle={"Results"}/>
      <BookCard />
    </div>
  );
}

export default App;
