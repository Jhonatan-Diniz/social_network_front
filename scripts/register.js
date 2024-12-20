import { PostFetch } from "../scripts/fetch.js"

const endpoint = 'users/register'

const Register = async () => {
    let name = document.querySelector('#name').value
    let email = document.querySelector("#email").value
    let password = document.querySelector('#password').value

    const data = {
      name: name,
      email: email,
      password: password
    }

    await PostFetch(endpoint, data)

    window.location.replace('http://localhost:8000/')
}


let register_btn = document.querySelector("#register_btn")
register_btn.addEventListener('click', Register)

