const hbs = require("handlebars");

module.exports = function (html: string) {
  return new hbs.SafeString(html);
};
