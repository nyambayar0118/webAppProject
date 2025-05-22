import express from 'express';
import { checkUserCredentials } from '../services/loginService.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email болон нууц үг хоёулаа шаардлагатай." });
  }

  try {
    const success = await checkUserCredentials(email, password);
    if (!success) {
      return res.status(401).json({ error: "Нэвтрэх нэр эсвэл нууц үг буруу." });
    }

    res.json({ success: true });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Серверийн алдаа." });
  }
});

export default router;