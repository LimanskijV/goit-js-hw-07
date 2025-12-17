const form = document.querySelector(".login-form")

form.addEventListener("submit", event => {
    event.preventDefault();

    const formEmail = event.currentTarget.elements.email.value.trim();

    const formPass = event.currentTarget.elements.password.value.trim();

    if( !formEmail || !formPass){
        alert("All form fields must be filled in");
        return;
    }

    const formData = {
        email: formEmail,
        password: formPass
    }

    console.log(formData);
    form.reset();
});

