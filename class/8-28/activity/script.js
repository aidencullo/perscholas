// 1. Use the Random User API (https://randomuser.me/) to recreate the output shown. 

// 2. When the page first loads, and when the button is clicked, use fetch to get new user data from the API 

// 3. Update the image, name, and email with the new user data

// EXTRA: Add a query string to the URL to filter the data you get back (refer to documentation)

//     ?example=this

// EXTRA #2: Make multiple requests to the same API to get additional data and use that data in a unique way



const person = document.getElementById('person');
const next = document.getElementById('next');
const name = document.getElementById('name');
const email = document.getElementById('email');
const age = document.getElementById('age');
next.addEventListener("click", getNewPerson);

async function getNewPerson() {
  const url = 'https://randomuser.me/api/?gender=female&nat=us';
  const response = await fetch(url);
  const jsonData = await response.json();
  person.src = jsonData.results[0].picture.large;
  name.textContent = jsonData.results[0].name.first + " " + jsonData.results[0].name.last;
  email.textContent = jsonData.results[0].email;
  age.textContent = jsonData.results[0].dob.age;
}

getNewPerson();
