import express from 'express';
import { checkUsername, checkPassword } from '../services/loginService.js';

const router = express.Router();

// POST /api/login/username
router.post('/username', async (req, res) => {
  const { value } = req.body;

  if (!value) {
    return res.status(400).json({ error: 'Missing value' });
  }

  try {
    const result = await checkUsername(value);
    return res.status(result ? 200 : 404).json({ success: result });
  } catch (err) {
    console.error('Username check failed:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST /api/login/password
router.post('/password', async (req, res) => {
  const { value } = req.body;

  if (!value) {
    return res.status(400).json({ error: 'Missing value' });
  }

  try {
    const result = await checkPassword(value);
    return res.status(result ? 200 : 404).json({ success: result });
  } catch (err) {
    console.error('Password check failed:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
