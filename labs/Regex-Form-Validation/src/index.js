const form = document.getElementById("form");
const name = form.elements["name"];
const email = form.elements["email"];
const zip = form.elements["zip"];
const country = form.elements["country"];
const password = form.elements["password"];

// Simple email validation.
// Using the event object's "returnValue" property,
// we can prevent form submission if the values are invalid.
function validateEmail(evt) {
  let emailVal = email.value;

  const atpos = emailVal.indexOf("@");
  const dotpos = emailVal.lastIndexOf(".");

  if (atpos < 1) {
    alert(
      "Your email must include an @ symbol, which must not be at the beginning of the email."
    );
    email.focus();
    evt.returnValue = false;
    return false;
  }

  if (dotpos - atpos < 2) {
    alert(
      "Invalid structure: @.\nYou must include a domain name after the @ symbol."
    );
    email.focus();
    evt.returnValue = false;
    return false;
  }

  evt.returnValue = true;
  return emailVal;
}

form.addEventListener("submit", validateEmail);
