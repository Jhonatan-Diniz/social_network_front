import { PostFetch } from "../scripts/fetch.js"

const endpoint = 'users/login'

const Login = async () => {
    let email = document.querySelector("#email").value
    let password = document.querySelector('#password').value

    let data = {
      email: email,
      password: password
    }

    let user_infos = await PostFetch(endpoint, data)
    console.log(user_infos)

    localStorage.setItem('TOKEN', user_infos.access_token)
    localStorage.setItem('USERNAME', user_infos.username)
    localStorage.setItem('USERID', user_infos.id)
    window.location.replace('http://localhost:8000/')
}

let login_btn = document.querySelector('#login_btn')
login_btn.addEventListener('click', Login)
