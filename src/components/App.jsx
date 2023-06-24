import { Route, Routes } from 'react-router-dom';
import SingUp from 'pages/SingUp/SingUp';
import Layout from './Layout/Layout';
import LogIn from 'pages/LogIn/LogIn';
import Home from 'pages/Home/Home';
import PhoneBook from 'pages/PhoneBook/PhoneBook';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<SingUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="contacts" element={<PhoneBook />} />
      </Route>
    </Routes>
  );
}

export default App;
