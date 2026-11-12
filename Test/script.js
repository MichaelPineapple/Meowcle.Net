function mclHttPost(_url, _request, _callback)
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
      console.log('Success:', data);
      _callback(data.resultCode, data.payload);
    })
    .catch((error) => {
      console.error('Error:', error);
      _callback("LOCAL_ERR", null);
    });
}


function test()
{
    alert("Test")
    function callback_test(_resultCode, _payload)
    {
        alert(_payload)
    }

    const URL = 'https://meowcle.net/cgi-bin/test.py';
    requestObj = { };
    mclHttPost(URL,requestObj, callback_test);
}
