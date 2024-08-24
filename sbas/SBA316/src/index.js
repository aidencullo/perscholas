const registration = document.getElementById("lottery-registration");

function showError(element, message, evt) {
  alert(message);
  element.focus();
  evt.preventDefault();
}

function validateRegistration(evt) {
  const { fullName } = registration.elements;
  const errors = [];

  const fullNameVal = fullName.value.trim();
  if (fullNameVal === "aiden") {
    errors.push({ element: fullName, message: "Your username cannot be 'aiden'." });
  }

  if (errors.length > 0) {
    // Show the first error and stop form submission
    showError(errors[0].element, errors[0].message, evt);
    return false;
  }

  alert("Your registration was successful!");
  return true;
}

registration.addEventListener("submit", validateRegistration);

// Cache the jackpot element
const jackpot = document.querySelector("#jackpot");
jackpot.textContent = "JACKPOT: $1,000,000";
jackpot.style.color = "red";
jackpot.style.fontSize = "14px"; // Ensure font size is max 14px
jackpot.style.fontWeight = "bold";
jackpot.style.textAlign = "center";
jackpot.style.border = "1px solid black";
jackpot.style.padding = "10px";
jackpot.style.margin = "10px";
jackpot.style.borderRadius = "5px";
jackpot.style.backgroundColor = "yellow";

// Append child elements to jackpot
jackpot.appendChild(document.createElement("div"));
jackpot.lastChild.textContent = "Participating Cities";

// Add cities list
jackpot.lastChild.appendChild(document.createElement("ul"));
const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];
cities.forEach((city) => {
  const li = document.createElement("li");
  li.textContent = city;
  jackpot.lastChild.lastChild.appendChild(li);
});

// Template for winners
const template = document.createElement("template");
template.innerHTML = `
  <div>
    <h2>Winners</h2>
    <ul>
      <li>John Doe</li>
      <li>Jane Doe</li>
      <li>John Smith</li>
      <li>Jane Smith</li>
    </ul>
  </div>
`;

const winners = document.querySelector("#winners");
winners.style.border = "1px solid black";
winners.style.padding = "10px";
winners.style.margin = "10px";
winners.style.borderRadius = "5px";
winners.style.backgroundColor = "lightblue";
winners.style.fontSize = "14px"; // Ensure font size is max 14px
winners.appendChild(template.content.cloneNode(true));

// BOM properties and methods
const { innerWidth, innerHeight } = window;
if (innerWidth > 1000) {
  alert("Your screen is wide enough to view this page!");
} else {
  alert("Your screen is too narrow to view this page!");
}

if (innerHeight > 500) {
  alert("Your screen is tall enough to view this page!");
} else {
  alert("Your screen is too short to view this page!");
}

// Modify attribute on button click
const button = document.querySelector("#dark-mode");
button.textContent = "Change Theme";
button.style.padding = "10px";
button.style.fontSize = "14px"; // Ensure font size is max 14px
button.addEventListener("click", () => {
  if (jackpot.style.backgroundColor === "yellow") {
    jackpot.style.backgroundColor = "black";
    winners.style.backgroundColor = "darkgray";
    return;
  }
  jackpot.style.backgroundColor = "yellow";
  winners.style.backgroundColor = "lightblue";
});
