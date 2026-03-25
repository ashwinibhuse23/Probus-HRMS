

const form = document.getElementById("demoForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let hasError = false;

    const inputs = form.querySelectorAll("input");

    inputs.forEach((input) => {

        const error = input.nextElementSibling;

        if (input.value.trim() === "") {

            error.textContent = "Please fill out this field.";
            input.classList.add("input-error");

            hasError = true;

        } else {

            error.textContent = "";
            input.classList.remove("input-error");

        }

    });

    const formError = document.getElementById("formError");

    if (hasError) {

        formError.style.display = "block";
        formError.textContent = "One or more fields have an error. Please check and try again.";

    } else {

        formError.style.display = "none";
        alert("Form submitted successfully");

    }

});

