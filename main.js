document.getElementById('getStarted').addEventListener('click', validateInputs);

function validateInputs(event) {
  event.preventDefault();
  const inputs = document.querySelectorAll('.input-container input');
  let allValid = true;

  inputs.forEach((input, index) => {
    const errorIcon = input.nextElementSibling;
    const errorMessage = document.getElementById(`error${index + 1}`);
    let errorText = "";

    if (input.value.trim() === "") {
      switch (index) {
        case 0:
          errorText = "First Name cannot be empty.";
          break;
        case 1:
          errorText = "Last Name cannot be empty.";
          break;
        case 2:
          errorText = "Email cannot be empty.";
          break;
        case 3:
          errorText = "Password cannot be empty.";
          break;
      }

      errorIcon.style.display = "block";
      input.classList.add("error");
      errorMessage.style.display = "block";
      errorMessage.textContent = errorText;
      allValid = false;
    } else {
      errorIcon.style.display = "none";
      input.classList.remove("error");
      errorMessage.style.display = "none";
    }
  });

  return allValid;
}


