import sql from "../database/database.js";
import crypto from "crypto";

function sha256(value) {
    return crypto.createHash("sha256").update(value).digest("hex");
}

export async function createUser(name, email, password) {
    const emailHash = sha256(email);
    const passwordHash = sha256(password);

    const existing = await sql`SELECT 1 FROM users WHERE email = ${emailHash}`;
    if (existing.length > 0) return false;

    await sql`INSERT INTO users (name, email, password) VALUES (${name}, ${emailHash}, ${passwordHash})`;
    return true;
}