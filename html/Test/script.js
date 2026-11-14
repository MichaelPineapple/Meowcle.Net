function httpPost(_url, _request, _callback)
{
    console.log(_request);
    fetch(_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(_request),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data)
      _callback(data.resultCode, data.payload)
    })
    .catch((error) => {
      console.error('Error:', error)
      _callback("LOCAL_ERR", null)
    });
}

function callSpheem(verb, request, callback)
{
    const URL = "https://meowcle.net/cgi-bin/Spheem-API/" + verb + ".js"
    httpPost(URL, request, callback)
}

function hello()
{
    function callback_hello(_resultCode, _payload)
    {
        alert(_payload)
    }
    const request = { test:"bruh" }
    callSpheem("hello", request, callback_hello)
}

function login()
{
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    function callback_login(_resultCode, _payload)
    {
        alert(_payload)
    }
    const request = { username:username, password:password }
    callSpheem("login", request, callback_login)
}
