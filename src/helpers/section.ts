module.exports = function (name: string, options: Record<any, any>) {
  if (!this._sections) this._sections = {};
  this._sections[name] = (this._sections[name] || "").concat(options.fn(this));
  return null;
};
