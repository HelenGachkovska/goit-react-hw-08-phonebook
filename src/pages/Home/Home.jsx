import { Typography } from '@mui/material';

function Home() {
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: '80px',
        textAlign: 'center',
        color: 'gray',
        marginTop: '30px',
      }}
    >
      Welcome to Phonebook
    </Typography>
  );
}

export default Home;
