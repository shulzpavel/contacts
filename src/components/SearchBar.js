import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {searchContact, sortContacts, addContact} from '../redux/contactsActions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
      setSearchTerm(e.target.value)
    dispatch(searchContact(e.target.value))
  };

  const handleSortChange = (e) => {
    dispatch(sortContacts(e.target.value));
  };
  const handleAddContact = (e) => {
    dispatch(addContact(e.target.value));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Поиск по имени"
        value={searchTerm}
        onChange={handleSearch}
      />
      <select onChange={handleSortChange}>
        <option value="name">Сортировать по имени</option>
        <option value="lastname">Сортировать по фамилии</option>
      </select>
      <button onClick={handleAddContact}>+</button>
    </div>
  );
};

export default SearchBar;