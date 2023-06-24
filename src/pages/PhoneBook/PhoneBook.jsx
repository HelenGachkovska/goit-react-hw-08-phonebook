import ContactsForm from 'components/ContactsForm/index';
import ContactList from 'components/ContactsList/index';
import ContactFilter from 'components/ContactsFilter/index';
import { AppContainer, AppTitle } from './PhoneBook.styled';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from 'redux/thunks';
import { useEffect } from 'react';


function PhoneBook() {     
    const dispatch = useDispatch();
  
   useEffect(() => {
    dispatch(getContactsThunk());
   }, [dispatch]);
    
  return (
    <AppContainer>
      <ContactsForm />
      <AppTitle>Contacts</AppTitle>
      <ContactFilter />
      <ContactList />
    </AppContainer>
  );
}

export default PhoneBook;
