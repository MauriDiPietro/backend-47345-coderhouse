const form = document.getElementById("form");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const boton = document.getElementById("boton");

form.onsubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/users/loginfront', {
        method: 'POST',
        body: JSON.stringify({
            email: inputEmail.value,
            password: inputPassword.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json())
    .then((response) => {
        console.log(response); //token
        localStorage.setItem('token', response)
    })
}

boton.onclick = () => {
    fetch('http://localhost:8080/users/private', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then((response) => response.json())
    .then((response) => {
        console.log(response); //DATOS DEL USUARIO
    })
}
