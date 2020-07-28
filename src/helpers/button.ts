const hbss = require("handlebars");

module.exports = function (title: string) {
  return new hbss.SafeString(`<input type="submit" value=${title}>`);
};
