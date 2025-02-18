import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <Container 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold' }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: '2rem' }}>
        Oops! The page you are looking for does not exist.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        component={Link} 
        to="/" 
        sx={{ fontSize: '1.25rem' }}
      >
        Go to Home
      </Button>
    </Container>
  );
}

export default NotFoundPage;
