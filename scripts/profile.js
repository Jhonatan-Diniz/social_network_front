import { GetFetch } from "./fetch.js"
let user_name = document.querySelector('#username')
user_name.innerHTML += `@${localStorage.getItem('USERNAME')}`

const RenderPosts = async () => {
    let user_id = localStorage.getItem('USERID')
    console.log(user_id)
    let endpoint = `posts/${user_id}`
    let list_posts = await GetFetch(endpoint)

    let main_root = document.querySelector('#main_root')
    main_root.innerHTML = ''
    for (let post of list_posts) {
        let post_date = new Date(post.created).toLocaleDateString('en-US')
        main_root.innerHTML += `
          <div class='post'>
              <span class='user_data'>
              <span class='nickname'>@${localStorage.getItem('USERNAME')}</span>
              <span class='date'>${post_date}</span>
              </span>
              <div class='message'>
                  ${post.msg}
              </div>
              <span class='interaction_bar'>
                  <button class='int_btn'>comment</button>
                  <button class='int_btn'>like</button>
                  <button class='int_btn'>share</button>
               </span>
          </div>
        `
    }
}

const btn_posts = document.querySelector('#posts_btn')
btn_posts.addEventListener('click', RenderPosts)
if (localStorage.getItem('USERID')) {
    window.addEventListener('load', RenderPosts)
}
