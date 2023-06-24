import ContactsForm from './ContactsForm/index';
import ContactList from './ContactsList/index';
import ContactFilter from './ContactsFilter/index';
import { AppContainer, AppTitle } from './styled';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from 'redux/thunks';
import { useEffect } from 'react';

function App() {  
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

export default App;
