document
  .getElementById("myBtn")
  .addEventListener("click", testRequest);

async function testRequest() {
  let inputVal = document.getElementById("myInput").value;
  let requestBody = { data: inputVal };

  const response = await axios.post('https://jsonplaceholder.typicode.com/todos', 
				    requestBody, { 
				      headers: { 
					'Content-Type': 'application/json; charset=UTF-8' 
				      }
				    });

  logResponse(response);
}

async function logResponse(response) {
  console.log(response.data);
}
