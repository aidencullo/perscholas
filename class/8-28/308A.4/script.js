document
  .getElementById("myBtn")
  .addEventListener("click", testRequest);

async function testRequest() {
  let inputVal = document.getElementById("myInput").value;
  let requestBody = { data: inputVal };

  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    }
  });

  alertResponse(response);
}

async function alertResponse(response) {
  if (response.ok) {
    const textData = await response.text();
    alert(textData);
  } else {
    alert("The request returned a status other than 200 OK: " + response.status);
  }
}
