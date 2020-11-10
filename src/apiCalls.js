export const fetcher = {

   getUrls() {
    return fetch('http://localhost:3001/api/v1/urls')
    .then(response => response.json())
  },
  
   giveUrls(requestedUrl) {
    let int = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestedUrl)
    }
    return fetch('http://localhost:3001/api/v1/urls', int)
    .then(response => response.json())
  },
  
  //  delete(unrequestedUrl) {
  //   let int = { method: 'DELETE'}
  //   return fetch(`http://localhost:3001/api/v1/urls/${unrequestedUrl}`, int)
  //   .then(response => response.json())
  // }
  
}