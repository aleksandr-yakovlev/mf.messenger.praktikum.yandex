const getCustomValidity = (input: HTMLInputElement): string => {
  const message = {
    "^[а-яА-Я]+$": "Только кириллица",
    "^[a-zA-Z]+$": "Только латинские буквы",
    "^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$":
      "8+ длина, спецсимволы",
  };
  return (input.value && message[input.pattern]) || "Необходимо заполнить";
};

const validatePassword = (pwd: HTMLInputElement, confirmPwd: HTMLInputElement): void => {
  if (confirmPwd.value !== pwd.value) {
    confirmPwd.setCustomValidity("Пароли не совпадают");
    confirmPwd.classList.add("error");
    confirmPwd.reportValidity();
  } else {
    confirmPwd.setCustomValidity("");
    confirmPwd.classList.remove("error");
  }
};

export const formValidity = (form: HTMLFormElement): void => {
  [...form.getElementsByTagName("INPUT")].forEach((el: HTMLInputElement) => {
    const element = el;
    if (element.name === "confirmPwd") {
      const pwd: HTMLInputElement = form.querySelector("#pwd");
      if (pwd) {
        const validate = () => validatePassword(pwd, element);
        pwd.onblur = validate;
        element.onkeyup = validate;
      }
    } else {
      element.oninvalid = () => {
        element.setCustomValidity(getCustomValidity(element));
      };
      element.oninput = () => {
        element.setCustomValidity("");
      };
      element.onblur = () => {
        element.reportValidity();
      };
    }
    element.onchange = () => {
      if (element.checkValidity() && !element.classList.contains("error")) {
        console.log(
          [...form.elements].filter(
            (input: HTMLInputElement) => input.type !== "submit" && input.value
          )
        );
      }
    };
  });
};
