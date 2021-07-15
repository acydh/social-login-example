import { useState } from 'react'

function App () {
  const [token, setToken] = useState()

  // this function should be called when the get request from the provider is received.
  const handleGetToken = () => {
    // get the provider name from the 'state' query param
    const provider = Object.fromEntries(new URLSearchParams(window.location.search).entries()).state
    // call the api with the same query params received from the provider request
    const params = window.location.search
    fetch(`http://spedire-platform.test/api/login/${provider}/callback${params}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        setToken(response.token)
      })
  }

  return (
    <div>
      <h3><a href='http://localhost/login/facebook'>Facebook</a></h3>
      <h3><a href='http://localhost/login/google'>Google</a></h3>
      <h3><a href='http://localhost/login/linkedin'>Linkedin</a></h3>
      <button type='button' onClick={handleGetToken}>Get token</button>
      <h2>Token: {token}</h2>
    </div>
  )
}

export default App
