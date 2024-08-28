const request = new XMLHttpRequest();

const url = "https://jsonplaceholder.typicode.com/posts";
request.open("GET", url, true);
request.send();
