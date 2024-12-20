import { PostFetch } from "../scripts/fetch.js"

const token = localStorage.getItem('TOKEN')
const endpoint = 'posts/create_post'

const PostContent = async () => {
    let content = document.querySelector("#input_post").value;

    if (content.trim() == ''){
      return
    }

    let data = {
      message: content
    }

    let res = await PostFetch(endpoint, data, token)
    if (res.status == 401) {
      alert('You must login to post!')
    }
    location.reload()
}

let post_btn = document.querySelector("#send_btn")
post_btn.addEventListener("click", PostContent)
