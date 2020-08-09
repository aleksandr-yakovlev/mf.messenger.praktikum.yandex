import * as hbs from "handlebars";

// хелпер для условного рендеринга шаблона

enum eOperators {
  eq = "eq", // сравнение
}

module.exports = (
  v1: string | number,
  operator: eOperators,
  v2: string | number,
  options: hbs.HelperOptions
) => {
  const operators = {
    [eOperators.eq]: (left: string | number, right: string | number) => {
      return left === right;
    },
  };
  const result = operators[operator](v1, v2);
  return result ? options.fn(this) : options.inverse(this);
};
