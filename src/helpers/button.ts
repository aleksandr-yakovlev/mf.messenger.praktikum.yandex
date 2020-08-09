import * as hbs from "handlebars";

module.exports = (title: string): hbs.SafeString => {
  return new hbs.SafeString(`<input type="submit" value=${title}>`);
};
