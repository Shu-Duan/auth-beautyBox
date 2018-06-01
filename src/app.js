import authRoutes from './controllers/authController.js';
import express from 'express';

const app = express();

app.use('/app/auth', authRoutes);
app.listen(81, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('auth server started.');
  }
});