import * as hbs from "handlebars";

module.exports = (html: string) => {
  return new hbs.SafeString(html);
};
