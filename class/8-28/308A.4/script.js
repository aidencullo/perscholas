const request = new XMLHttpRequest();

const url = "https://jsonplaceholder.typicode.com/posts";
request.open("GET", url, true);
request.setRequestHeader(
  "Content-Type",
  "application/x-www-form-urlencoded; charset=UTF-8"
);
request.send();

function handleResponse() {
  if (request.readyState === XMLHttpRequest.DONE) {
    const response = JSON.parse(request.responseText);
  } else {
    console.log("Error");
  }
}

request.onreadystatechange = handleResponse;
