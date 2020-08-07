import { Block } from "../../modules/Block";
import { ProfileLayout } from "../../layouts/Profile";
import { Form } from "../../components/UI/Form";

const formCtx = {
  label: "Настройки пользователя",
  submit: "Сохранить",
  inputs: [
    {
      name: "fullname",
      type: "text",
      size: "30",
      required: true,
      placeholder: "ФИО",
      pattern: "^[а-яА-Я]+$",
    },
    {
      name: "uname",
      type: "text",
      size: "30",
      required: true,
      placeholder: "Логин",
      pattern: "^[a-zA-Z]+$",
    },
    {
      name: "email",
      type: "email",
      size: "30",
      required: true,
      placeholder: "Почта",
    },
    {
      name: "opwd",
      type: "password",
      size: "30",
      required: true,
      placeholder: "Старый пароль",
    },
    {
      name: "pwd",
      type: "password",
      size: "30",
      required: true,
      placeholder: "Пароль",
      pattern:
        "^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$",
    },
    {
      name: "confirm_pwd",
      type: "password",
      size: "30",
      required: true,
      placeholder: "Пароль еще раз",
    },
  ],
};

export class ProfilePage extends Block {
  render():HTMLElement {
    const Layout = new ProfileLayout();
    const ProfileForm = new Form(formCtx);
    Layout.getContent()
      .querySelector("#profile-form")
      .appendChild(ProfileForm.getContent());
    return Layout.getContent();
  }
}
