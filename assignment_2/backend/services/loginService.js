import sql from "../database/database.js";
import crypto from "crypto";

function sha256(value) {
    return crypto.createHash("sha256").update(value).digest("hex");
}

export async function checkUsername(username) {
    const hash = sha256(username);
    const result = await sql`select checkUserName(${hash})`;
    return result.length > 0 ? true : false;
}

export async function checkPassword(password) {
    const hash = sha256(password);
    const result = await sql`select checkUserPassword(${hash})`;
    return result.length > 0 ? true : false;
}