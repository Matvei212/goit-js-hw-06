const validationInput = document.querySelector("#validation-input");

  validationInput.addEventListener("blur", () => {
    const inputValue = validationInput.value.trim();
    const dataLength = Number(validationInput.dataset.length);

    if (inputValue.length === dataLength) {
      validationInput.classList.add("valid");
      validationInput.classList.remove("invalid");
    } else {
      validationInput.classList.add("invalid");
      validationInput.classList.remove("valid");
    }
  });