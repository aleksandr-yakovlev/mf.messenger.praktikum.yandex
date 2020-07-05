module.exports = function (name, options) {
  if (!this._sections) this._sections = {};
  this._sections[name] = (this._sections[name] || "").concat(options.fn(this));
  return null;
};
