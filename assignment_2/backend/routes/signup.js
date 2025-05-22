import express from 'express';
import { createUser } from '../services/signupService.js';

const router = express.Router();

router.post("/", async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: "Бүх талбарыг бөглөнө үү!" });
    }

    try {
        const success = await createUser(name, email, password);
        if (success) {
            res.status(201).json({ success: true });
        } else {
            res.status(409).json({ error: "Хэрэглэгч аль хэдийн бүртгэлтэй байна!" });
        }
    } catch (err) {
        console.error("Signup error:", err);
        res.status(500).json({ error: "Серверийн алдаа" });
    }
});

export default router;
