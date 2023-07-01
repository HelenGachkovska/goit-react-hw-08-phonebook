import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '@mui/material';
import { ToastContainer } from 'react-toastify';

function Layout() {
  return (
    <>
      <ToastContainer />
      <AppBar sx={{ flexGrow: 1, backgroundColor:'grey' }} position='fixed'>
        <Header />
      </AppBar>
      <main style={{ marginTop: 100}}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Layout;

