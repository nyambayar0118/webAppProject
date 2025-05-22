import express from 'express';
import cors from 'cors';
import productRoutes from './routes/product.js';
import loginRoutes from './routes/login.js';

const app = express();
app.use(cors());
app.use(express.json());

// This mounts routes at /api/login/*
app.use('/api/login', loginRoutes);

// This mounts routes at /api/products/*
app.use('/api', productRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
