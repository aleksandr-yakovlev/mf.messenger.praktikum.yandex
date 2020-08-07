import * as hbss from "handlebars";

module.exports = (title: string) => {
  return new hbss.SafeString(`<input type="submit" value=${title}>`);
};
