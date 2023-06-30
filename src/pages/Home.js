import React from 'react';
import { Form } from '../components/Form';
import { Typography, Container, Box } from '@mui/material';

export const Home = () => {
  return (
    <div>
      <Container maxWidth="sm">
      <Box mt={4}>
      <Typography variant="h3">BillChecker 3000</Typography>
      </Box>
      </Container>
      <Form />
    </div>
  );
}

