import express from 'express';
import productRoutes from './routes/product.js';
import signupRoutes from './routes/signup.js';
import loginRoutes from './routes/login.js';

const app = express();
app.use(express.json());

// This mounts routes at /api/signup/*
app.use('/api/signup', signupRoutes);

// This mounts routes at /api/login/*
app.use('/api/login', loginRoutes);

// This mounts routes at /api/products/*
app.use('/api/products', productRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
