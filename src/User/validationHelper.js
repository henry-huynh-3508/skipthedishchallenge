var passwordValidator = require("password-validator");

export function isValidUsername(username) {
  var usernameschema = new passwordValidator();
  // Add username properties to it
  usernameschema
    .is()
    .min(8) // Minimum length 8
    .is()
    .max(50) // Maximum length 50
    .has()
    .not()
    .spaces(); // Should not have spaces
  return usernameschema.validate(username);
}

export function isValidPassword(password) {
  var passwordschema = new passwordValidator();
  // Add username properties to it
  passwordschema
    .is()
    .min(8) // Minimum length 8
    .is()
    .max(50) // Maximum length 50
    .has()
    .uppercase() // Must have uppercase letters
    .has()
    .lowercase() // Must have lowercase letters
    .has()
    .digits(2) // Must have at least 2 digits
    .has()
    .not()
    .spaces(); // Should not have spaces
  return passwordschema.validate(password);
}
