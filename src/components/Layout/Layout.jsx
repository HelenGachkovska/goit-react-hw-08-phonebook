import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '@mui/material';

function Layout() {
  return (
    <>
      <AppBar sx={{ flexGrow: 1, backgroundColor:'grey' }} position='static'>
        <Header />
      </AppBar>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Layout;

