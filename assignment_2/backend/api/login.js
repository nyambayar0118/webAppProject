import { checkPassword, checkUsername } from "../services/loginService.js";

export async function handleLogin(request, url) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const parts = url.pathname.split('/').filter(Boolean); // remove empty parts

  // Expected: /api/login/username or /api/login/password
  if (parts.length === 3 && parts[0] === 'api' && parts[1] === 'login') {
    const action = parts[2]; // 'username' or 'password'
    let body;

    try {
      body = await request.json();
    } catch {
      return new Response('Invalid JSON', { status: 400 });
    }

    // Expect body.value containing the raw username or password
    if (!body.value) {
      return new Response('Missing value', { status: 400 });
    }

    try {
      let result;
      if (action === 'username') {
        result = await checkUsername(body.value);
      } else if (action === 'password') {
        result = await checkPassword(body.value);
      } else {
        return new Response('Not Found', { status: 404 });
      }

      return new Response(JSON.stringify({ success: result }), {
        status: result ? 200 : 404,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (err) {
      console.error('Login check failed:', err);
      return new Response('Internal Server Error', { status: 500 });
    }
  }

  return new Response('Not Found', { status: 404 });
}
