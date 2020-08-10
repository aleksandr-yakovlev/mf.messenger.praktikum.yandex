import { render } from "./render";
import { ErrorPage } from "../pages/Error";

describe("utils/render", () => {
  it("должен создавать DOM элемент EPage", () => {
    const EPage = new ErrorPage({ ecode: 404 });
    render("body", EPage);
    expect(document.querySelector(".ecode").textContent).toBe("404");
    expect(document.querySelector(".emessage")).not.toBeNull();
  });
});
