const request = new XMLHttpRequest();

const url = "https://jsonplaceholder.typicode.com/posts";
request.open("GET", url, true);
request.send();

function alertResponse() {
  if (request.readyState === XMLHttpRequest.DONE) {
    if (request.status === 200) {
      alert(request.responseText);
    } else {
      alert("The request returned a status other than 200 OK: " + request.status);
    }
  }
}

request.onreadystatechange = alertResponse;
