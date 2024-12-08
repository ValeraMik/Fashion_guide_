function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Будь ласка, заповніть усі поля!');
        return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Введіть дійсний email!');
        return false;
    }

    return true;
}
