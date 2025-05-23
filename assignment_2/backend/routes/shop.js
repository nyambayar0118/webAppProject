import express from 'express';
import { getShopById } from '../services/shopService.js';

const router = express.Router();

// GET /api/shop/:id
router.get('/shop/:id', async (req, res) => {
  try {
    const shopId = parseInt(req.params.id, 10);

    if (isNaN(shopId)) {
      return res.status(400).json({ error: 'Invalid shop ID format' });
    }

    const data = await getShopById(shopId);

    if (!data) return res.status(404).json({ error: "Shop not found" });

    res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching shop:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;