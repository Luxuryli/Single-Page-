document.getElementById('getStarted').addEventListener('click', validateInputs);

function validateInputs() {
    const inputs = document.querySelectorAll('.input-container input');
    let allValid = true;

    inputs.forEach((input, index) => {
        const errorIcon = input.nextElementSibling;
        const errorMessage = document.getElementById(`error${index + 1}`);
        const eyeIcon = input.parentElement.querySelector('.eye-icon');
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
            if (eyeIcon) eyeIcon.style.display = "none"; // Hide the eye icon if there's an error
        } else {
            errorIcon.style.display = "none";
            input.classList.remove("error");
            errorMessage.style.display = "none";
            if (eyeIcon) eyeIcon.style.display = "block"; // Show the eye icon if there's no error
        }
    });

    return allValid;
}

const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('input4');

togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Toggle the eye icon
    if (type === 'password') {
        togglePassword.classList.remove('hidden');
        togglePassword.classList.add('visible');
    } else {
        togglePassword.classList.remove('visible');
        togglePassword.classList.add('hidden');
    }
});
