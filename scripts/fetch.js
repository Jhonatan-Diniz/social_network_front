const _URL = 'http://127.0.0.1:7000/'


export async function GetFetch(endpoint) {
    const res = fetch(_URL+endpoint).then(data => {
      return data.json()
    })
    return res
}


export async function PostFetch(endpoint, data) {
    let url = _URL+endpoint

    let res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('TOKEN') ? localStorage.getItem('TOKEN'):''}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)

    }).then(info => {
        return info.json()
    })
    return res
}
