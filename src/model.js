import * as MS from 'microstates'

export default class LoginModel {
  email = MS.String
  password = MS.String

  get isValid() {
    return this.email !== '' && this.password !== ''
  }

  get isValidEmail() {
    return this.email.indexOf('@') !== -1;
  }
}
