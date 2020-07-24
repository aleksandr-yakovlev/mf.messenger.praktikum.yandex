const getCustomValidity = (input: HTMLInputElement): string => {
  const message = {
    "^[а-яА-Я]+$": "Только кириллица",
    "^[a-zA-Z]+$": "Только латинские буквы",
    "^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$":
      "8+ длина, спецсимволы",
  };
  return (input.value && message[input.pattern]) || "Необходимо заполнить";
};

const validatePassword = (
  pwd: HTMLInputElement,
  confirm_pwd: HTMLInputElement
): void => {
  if (confirm_pwd.value !== pwd.value) {
    confirm_pwd.setCustomValidity("Пароли не совпадают");
    confirm_pwd.classList.add("error");
    confirm_pwd.reportValidity();
  } else {
    confirm_pwd.setCustomValidity("");
    confirm_pwd.classList.remove("error");
  }
};

export const formValidity = (form: HTMLFormElement): void => {
  [...form.getElementsByTagName("INPUT")].forEach(
    (element: HTMLInputElement) => {
      if (element.name === "confirm_pwd") {
        const pwd: HTMLInputElement = form.querySelector("#pwd");
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
          element.reportValidity();
        };
      }
      element.onchange = function () {
        if (element.checkValidity() && !element.classList.contains("error")) {
          console.log(
            [...form.elements].filter(
              (input: HTMLInputElement) =>
                input.type !== "submit" && input.value
            )
          );
        }
      };
    }
  );
};
