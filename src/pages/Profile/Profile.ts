import { Block } from "../../modules/Block";
import { ProfileLayout } from "../../layouts/Profile";
import { Form } from "../../components/UI/Form";

import { formCtx } from "./data";

export class ProfilePage extends Block {
  render(): HTMLElement {
    const Layout = new ProfileLayout();
    const ProfileForm = new Form(formCtx);
    Layout.getContent().querySelector("#profile-form").appendChild(ProfileForm.getContent());
    return Layout.getContent();
  }
}
