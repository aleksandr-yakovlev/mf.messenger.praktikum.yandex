import * as hbs from "handlebars";
import * as button from "./button";

describe("./button", () => {
  it("должен регистрироваться хэлпер", () => {
    hbs.registerHelper("button", <hbs.HelperDelegate>button);
    const template = hbs.compile("{{button submit}}");
    expect(template({ submit: "test" })).toBe('<input type="submit" value=test>');
  });
});
