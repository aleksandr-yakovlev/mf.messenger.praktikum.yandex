module.exports = {
  process(src) {
    return `
      const Handlebarss = require('handlebars');
     
      Handlebarss.registerHelper("when", function(value) {return "sdsdsd"})
      module.exports = Handlebarss.compile(\`${src}\`);
      `;
  },
};
