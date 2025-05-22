import express from 'express';
import { getProductsWithId } from '../services/productService.js';

const router = express.Router();

router.get('/products/:id', async (req, res) => {
  try {
    const rawId = req.params.id;

    // Remove leading 'p' or 'P' and parse the rest as an integer
    const numericId = parseInt(rawId.replace(/^p/i, ''), 10);

    // If the result is not a number, respond with 400
    if (isNaN(numericId)) {
      return res.status(400).json({ error: 'Invalid product ID format' });
    }

    const product = await getProductsWithId(numericId);

    if (!product) return res.status(404).json({ error: "Product not found" });

    res.status(200).json(product);
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
