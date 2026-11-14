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

function createAccount()
{
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    function callback_createAccount(_resultCode, _payload)
    {
        alert(_payload)
    }
    const request = { username:username, password:password }
    callSpheem("createaccount", request, callback_createAccount)
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

function pay()
{
    const recipient = document.getElementById("recipient").value
    const amount = document.getElementById("amount").value
    function callback_pay(_resultCode, _payload)
    {
        alert(_payload)
    }
    const request = { recipient:recipient, amount:amount }
    callSpheem("pay", request, callback_login)
}
