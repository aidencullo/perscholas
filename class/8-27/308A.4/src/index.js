const request = new XMLHttpRequest();

request.open("GET", "https://www.example.com", true);
request.send();

request.setRequestHeader(
    "Content-Type",
    "my-MIME-type-here"
);

function handleResponse() {
    if (request.readyState === XMLHttpRequest.DONE) {
        // request is complete; do tasks.
    } else {
        // request is not complete.
    }
}

request.onreadystatechange = handleResponse;
