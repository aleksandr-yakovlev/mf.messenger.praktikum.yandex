import * as hbs from "handlebars";
import * as when from "./when";

describe("when helper", () => {
  it("должен регистрироваться хэлпер", () => {
    hbs.registerHelper("when", <hbs.HelperDelegate>when);
    const template = hbs.compile("{{#when 1 'eq' id}}selected{{/when}}");
    expect(template({ id: 1 })).toBe("selected");
    expect(template({ id: 2 })).toBe("");
  });
});
