class Model {
  constructor(modelProps) {
    this.props = Object.seal(modelProps);
  }

  isValid(object) {
    let valid = true;
    Object.keys(object).forEach((m) => {
      const value = this.props[m][0];
      const validator = this.props[m][1];
      valid &&= validator(object[m]);
    });
    return valid;
  }
}

export { Model };
