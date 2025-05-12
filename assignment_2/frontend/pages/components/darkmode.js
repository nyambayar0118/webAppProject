const toggle = document.getElementById('darkModeSolih');
const body = document.body;

toggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');

    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
        toggle.textContent = 'лight Mode';
    } else {
        body.setAttribute('data-theme', 'light');
        toggle.textContent = 'dark Mode';
    }
});
