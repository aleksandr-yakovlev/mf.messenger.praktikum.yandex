const getCustomValidity = (input) => {
  const message = {
    "^[а-яА-Я]+$": "Только кириллица",
    "^[a-zA-Z]+$": "Только латинские буквы",
    "^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$":
      "8+ длина, спецсимволы",
  };
  return (input.value && message[input.pattern]) || "Необходимо заполнить";
};

function validatePassword(pwd, confirm_pwd) {
  if (confirm_pwd.value !== pwd.value) {
    confirm_pwd.setCustomValidity("Пароли не совпадают");
    confirm_pwd.classList.add("error");
    confirm_pwd.reportValidity();
  } else {
    confirm_pwd.setCustomValidity("");
    confirm_pwd.classList.remove("error");
  }
}

export function formValidity() {
  [...document.getElementsByTagName("INPUT")].forEach((element) => {
    if (element.name === "confirm_pwd") {
      const pwd = document.getElementsByName("pwd")[0];
      if (pwd) {
        const validate = () => validatePassword(pwd, element);
        pwd.onblur = validate;
        element.onkeyup = validate;
      }
    } else {
      element.oninvalid = function () {
        element.setCustomValidity(getCustomValidity(element));
      };
      element.oninput = function () {
        element.setCustomValidity("");
      };
      element.onblur = function () {
        this.reportValidity();
      };
    }
    element.onchange = function () {
      if (element.checkValidity() && !element.error) {
        console.log(
          [...this.closest("form").elements].filter(
            (input) => input.type !== "submit" && input.value
          )
        );
      }
    };
  });
}
