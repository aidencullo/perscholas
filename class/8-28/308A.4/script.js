const requestInterceptor = axios.interceptors.request.use(request => {
  console.log('Request sent.');
  return request;
});

axios.interceptors.response.use(
  (response) => {
    // Success: status 200 - 299
    console.log('Successful response!');
    return response;
  },
  (error) => {
    // Failure: anything outside of status 2XX
    console.log('Unsuccessful response...');
    throw error;
  }
);

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

  axios.interceptors.request.eject(requestInterceptor);

  logResponse(response);
}

async function logResponse(response) {
  console.log(response.data);
}

