import React from 'react';
import './App.css';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
import {useSelector} from "react-redux";

function App() {
    const {contacts, searchContact,
        searchWord} = useSelector(state => state);

  return (
    <div className="App">
      <h1>Книжка контактов</h1>
      <SearchBar />
      
      <ContactList contacts={searchWord.length ?searchContact: contacts} />
    </div>
  );
}

export default App;