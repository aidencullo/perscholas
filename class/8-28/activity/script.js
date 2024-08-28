// 1. Use the Random User API (https://randomuser.me/) to recreate the output shown. 

// 2. When the page first loads, and when the button is clicked, use fetch to get new user data from the API 

// 3. Update the image, name, and email with the new user data

// EXTRA: Add a query string to the URL to filter the data you get back (refer to documentation)

//     ?example=this

// EXTRA #2: Make multiple requests to the same API to get additional data and use that data in a unique way



const person = document.getElementById('person');
person.addEventListener("click", getNewPerson);

async function getNewPerson() {
  person.style.cursor = 'wait';
  const response = await fetch("https://randomuser.me/api/");
  const jsonData = await response.json();
  const url = jsonData.results[0].picture.large;

  person.src = url;
  person.style.cursor = 'pointer';
}

getNewPerson();
