import React, {useState} from 'react';
import {deleteContact} from '../redux/contactsActions';
import { useDispatch, useSelector} from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ContactList = ({contacts}) => {
  const dispatch = useDispatch()
  const [isShow, setShow] = useState(false);
    if (!contacts?.length){
        return <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    }
    const onDelete = (index) => {
      dispatch(deleteContact(index)) 
    }
    const handlerShow = () => {
      setShow(!isShow)
    }
  return (
    <div className="contact-list">
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <div>{contact.name} {contact.lastname}</div>
            <div>{contact.phone}</div>
            <button onClick={()=> onDelete(index)} type='button'>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;