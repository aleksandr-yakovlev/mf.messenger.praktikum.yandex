module.exports = function (v1, operator, v2, options) {
  var operators = {
      eq: function (l, r) {
        return l == r;
      },
    },
    result = operators[operator](v1, v2);

  if (result) return options.fn(this);
  else return options.inverse(this);
};
