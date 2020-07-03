const hbs = require("handlebars");

module.exports = function (title) {
  return new hbs.SafeString(`<input type="submit" value=${title}>`);
};
