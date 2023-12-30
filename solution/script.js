const FORM = document.querySelector("#formNyhed");

let success;

FORM.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();
  success = true;

  let arryData = Array.from(event.target);
  arryData.forEach(validate);

  if (success) {
    FORM.submit();
  }
}

function validate(field) {
  if (field.nodeName === "BUTTON") return;

  field.nextElementSibling.textContent = "";

  if (field.required && !field.value) {
    field.nextElementSibling.textContent = "Feltet må ikke være tomt!";
    success = false;
  }

  if (field.type === "email") {
    const indexOfAt = field.value.indexOf("@");
    const indexOfDot = field.value.indexOf(".");
    if (
      indexOfAt === -1 ||
      indexOfAt === 0 ||
      indexOfAt === field.value.length - 1 ||
      indexOfDot === -1 ||
      indexOfDot === 0 ||
      indexOfDot === field.value.length - 1 ||
      indexOfDot < indexOfAt ||
      indexOfAt === indexOfDot - 1
    ) {
      field.nextElementSibling.textContent = "Du skal skrive en korrekt email!";
      success = false;
    }
  }
}

const formContact = document.querySelector("#form-contact");

let success2;

formContact.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();
  success2 = true;

  let arryData2 = Array.from(event.target);
  arryData2.forEach(validate2);

  if (success2) {
    formContact.submit();
  }
}

function validate2(field) {
  if (field.nodeName === "BUTTON") return;

  field.nextElementSibling.textContent = "";

  if (field.required && !field.value) {
    field.nextElementSibling.textContent = "Feltet må ikke være tomt!";
    success2 = false;
  }

  if (field.type === "text" && !field.value) {
    field.nextElementSibling.textContent = "skriv dit navn!";
    success2 = false;
  }

  if (field.type === "email") {
    const indexOfAt = field.value.indexOf("@");
    const indexOfDot = field.value.indexOf(".");
    if (
      indexOfAt === -1 ||
      indexOfAt === 0 ||
      indexOfAt === field.value.length - 1 ||
      indexOfDot === -1 ||
      indexOfDot === 0 ||
      indexOfDot === field.value.length - 1 ||
      indexOfDot < indexOfAt ||
      indexOfAt === indexOfDot - 1
    ) {
      field.nextElementSibling.textContent = "Du skal skrive en korrekt email!";
      success2 = false;
    }
  }
}
