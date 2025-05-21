import express from 'express';
import { getProductsWithId } from '../services/productService.js'; // adjust path if needed

const router = express.Router();

router.get('/products/:id', async (req, res) => {
  try {
    const product = await getProductsWithId(req.params.id);
    if (!product) return res.status(404).json({ error: "Not found" });
    res.json(product);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
