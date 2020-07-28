//хелпер для условного рендеринга шаблона

enum eOperators {
  eq = "eq", //сравнение
}

module.exports = function (
  v1: string | number,
  operator: eOperators,
  v2: string | number,
  options: Record<any, any>
) {
  const operators = {
      [eOperators.eq]: function (
        left: string | number,
        right: string | number
      ) {
        return left === right;
      },
    },
    result = operators[operator](v1, v2);

  if (result) return options.fn(this);
  else return options.inverse(this);
};
