module.exports = {
  process(src) {
    return `
      const Handlebarss = require('handlebars');
      const when = require('helpers/when');      
      Handlebarss.registerHelper("when", when)
      module.exports = Handlebarss.compile(\`${src}\`);
      `;
  },
};
