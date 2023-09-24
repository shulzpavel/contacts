import React from 'react';
import { useSelector } from 'react-redux';

const ContactList = ({contacts}) => {
    if (!contacts?.length){
        return 'загрузка...'
    }
  return (
    <div className="contact-list">
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <div>{contact.name} {contact.lastname}</div>
            <div>{contact.phone}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;