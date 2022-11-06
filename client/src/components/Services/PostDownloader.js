const baseUrl = "http://localhost:8000/api"

const PostDownloader = () => {
    const url = `${baseUrl}/challenge/get-challenges`
    const data = fetch(url).then(data => data.json())
    return data
}


export {PostDownloader}