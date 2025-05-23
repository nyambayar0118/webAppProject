import express from 'express';
import { createUser } from '../services/signupService.js';
import { checkUserName, checkEmail } from '../services/signupService.js';

const router = express.Router();

router.post("/signup", async (req, res) => {
    const { name, username, email, password } = req.body;
    if (!name || !username || !email || !password) {
        return res.status(400).json({ error: "Бүх талбарыг бөглөнө үү!" });
    }

    try {
        const success = await createUser(name, username, email, password);
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

router.post("/signup/check", async (req, res) => {
    const { username, email } = req.body;

    if (!username && !email) {
        return res.status(400).json({ error: "Username эсвэл email оруулна уу!" });
    }

    try {
        const usernameRes = await checkUserName(username);
        const emailRes = await checkEmail(email);
        
        if (usernameRes && emailRes) {
            return res.status(403).json({ error: "Username болон Email аль хэдийн бүртгэлтэй байна!" });
        } else if (usernameRes) {
            return res.status(401).json({ error: "Username аль хэдийн бүртгэлтэй байна!" });
        } else if (emailRes) {
            return res.status(402).json({ error: "Email аль хэдийн бүртгэлтэй байна!" });
        } else {
            return res.status(200).json({ success: true });
        }
    } catch (err) {
        console.error("Check user error:", err);
        res.status(500).json({ error: "Серверийн алдаа" });
    }
});

export default router;
