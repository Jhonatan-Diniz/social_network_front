import { getPosts, getUserById} from "./connections.js";

const RenderPosts = async () => {
  let posts_conteiner = document.querySelector('#posts')
  let posts_list = await getPosts()

  for (let post of posts_list) {
    let post_date = new Date(post.created).toLocaleDateString('en-US')
    let username = await getUserById(post.user_id)
    posts_conteiner.innerHTML += `
         <div class='post'>
              <span class='user_data'>
              <span class='nickname'>@${username.name}</span>
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

await RenderPosts()

