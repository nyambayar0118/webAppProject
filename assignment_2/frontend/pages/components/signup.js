document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = form.querySelector("input[type='text']");
    const emailInput = form.querySelector("input[type='email']");
    const passwordInput = form.querySelector("input[type='password']");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        const res = await fetch("http://localhost:3000/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });

        if (res.ok) {
            alert("Амжилттай бүртгэгдлээ!");
            window.location.href = "login.html";
        } else {
            const err = await res.json();
            alert("Алдаа: " + err.error);
        }
    });
});
