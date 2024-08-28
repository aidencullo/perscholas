let request;

document
  .getElementById("myBtn")
  .addEventListener("click", testRequest);

function testRequest() {
  request = new XMLHttpRequest();

  if (!request) {
    alert("Failed to create an XMLHttpRequest Object.");
    return false;
  }

  request.onreadystatechange = alertResponse;
  request.open("GET", "test.xml");    // Change this to point to our new XML document.
  request.send();
}

function alertResponse() {
  if (request.readyState === XMLHttpRequest.DONE) {
    if (request.status === 200) {
      const xmlDoc = request.responseXML;
      const doc_root = xmlDoc.querySelector("root");
      let data = doc_root.firstChild.data;

      alert(data);
    } else {
      alert("The request returned a status other than 200 OK: " + request.status);
    }
  }
}
