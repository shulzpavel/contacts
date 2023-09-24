import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {searchContact, sortContacts, addContact} from '../redux/contactsActions';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';


const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [isShow, setShow] = useState(false);

  const handleSearch = (e) => {
      setSearchTerm(e.target.value)
    dispatch(searchContact(e.target.value))
  };
  const handlerShow = () => {
    setShow(!isShow)
  }
  const handleSortChange = (e) => {
    dispatch(sortContacts(e.target.value));
  };
//  const handleAddContact = (e) => {
//     dispatch(addContact(e.target.value));
//   }; 
  const handleAddContact = (e) => {
    e.preventDefault();
    const [name, lastname, phone] = e.target
    const newContact = {
      name: name.value,
      lastname: lastname.value,
      phone: phone.value
    }
    // // Получаем данные из формы
    // const firstName = e.target.firstName.value;
    // const lastName = e.target.lastName.value;
    // // Создаем объект контакта
    // const newContact = {
    //   firstName,
    //   lastName,
    // };
    dispatch(addContact(newContact));
    setShow(false)
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
      <button onClick={handlerShow}>+</button>
      <Dialog open={isShow} onClose={handlerShow}>
        <DialogTitle>Добавление контакта</DialogTitle>
        <DialogContent>
      <form onSubmit={handleAddContact}>
  <label>
    Имя:
    <input
      type="text"
      name="firstName"
    />
  </label>
  <br />
  <label>
    Фамилия:
    <input
      type="text"
      name="lastName"
    />
  </label>
  <br />
  <label>
    Номер телефона:
    <input
      type="text"
      name="phone"
    />
  </label>
  <br/>
  <input type="submit" value="Отправить" />
</form> 
</DialogContent>
</Dialog>
    </div>
  );
};

export default SearchBar;