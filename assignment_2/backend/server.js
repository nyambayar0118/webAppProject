import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import history from 'connect-history-api-fallback';
import productRoutes from './routes/product.js';
<<<<<<< HEAD
// import loginRoutes from './routes/login.js';
=======
import signupRoutes from './routes/signup.js';
import loginRoutes from './routes/login.js';
>>>>>>> 73e4b46bc10f0715c8fd36e12a730afbb0ca69cb

const app = express();
app.use(cors());
app.use(express.json());

<<<<<<< HEAD
// Serve static files from the frontend directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPath = path.join(__dirname, '../frontend/pages');
=======
// This mounts routes at /api/signup/*
app.use('/api/signup', signupRoutes);

// This mounts routes at /api/login/*
app.use('/api/login', loginRoutes);
>>>>>>> 73e4b46bc10f0715c8fd36e12a730afbb0ca69cb

// API routes FIRST!
app.use('/api', productRoutes);
// app.use('/api/login', loginRoutes);

// History fallback for SPA (must come AFTER API routes, BEFORE static)
app.use(
  history({
    index: '/index.html',
    rewrites: [
      { from: /^\/api\/.*$/, to: (context) => context.parsedUrl.pathname }, // Don't rewrite API calls
    ],
  })
);

// Static files
app.use(express.static(frontendPath));


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});