axios.interceptors.request.use(request => {
  request.metadata = request.metadata || {};
  request.metadata.startTime = new Date().getTime();
  return request;
});

axios.interceptors.response.use(
  (response) => {
    response.config.metadata.endTime = new Date().getTime();
    response.durationInMS = response.config.metadata.endTime - response.config.metadata.startTime;
    return response;
  },
  (error) => {
    error.config.metadata.endTime = new Date().getTime();
    error.durationInMS = error.config.metadata.endTime - error.config.metadata.startTime;
    throw error;
  });

(async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  const { data, durationInMS } = await axios(url);
  console.log(`Request took ${durationInMS} milliseconds.`);
  console.log(data);
})();


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

