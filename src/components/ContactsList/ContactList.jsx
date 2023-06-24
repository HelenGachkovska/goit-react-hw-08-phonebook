import React from 'react';
import ContactItem from '../ContactItem/index';
import { List } from './styled';
import { useSelector } from 'react-redux';
import {
  stateSelectorContacts,
  stateSelectorError,
  stateSelectorFilters,
  stateSelectorIsLoading,
} from 'redux/selector';

function ContactList() {
  const contacts = useSelector(stateSelectorContacts);
  const filter = useSelector(stateSelectorFilters);
  const isLoading = useSelector(stateSelectorIsLoading);
  const error = useSelector(stateSelectorError);

  const filteredArray = contacts.filter(el =>
    el.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  return (
    <List>
      {error && <h2>{error}</h2>}
      {isLoading && <p>Loading...</p>}
      {filteredArray.map(el => {
        return (
          <ContactItem name={el.name} phone={el.phone} key={el.id} id={el.id} />
        );
      })}
    </List>
  );
}

export default ContactList;
