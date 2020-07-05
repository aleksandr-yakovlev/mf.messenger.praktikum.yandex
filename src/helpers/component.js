const hbs = require("handlebars");

module.exports = function (html) {
  return new hbs.SafeString(html);
};
