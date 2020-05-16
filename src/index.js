export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const parameterOne = /[^\w_-]/.test(this.name);
    const parameterTwo = /[0-9]{4,}/.test(this.name);
    const parameterThree = /^[^0-9_-]/.test(this.name);
    const parameterFour = /[^0-9_-]$/.test(this.name);
    if (!parameterTwo && !parameterOne && parameterThree && parameterFour) {
      return 'validation successfull';
    }
    return 'validation failed';
  }
}
