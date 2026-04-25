const { body, validationResult } = require("express-validator");

async function validateResult(req, res, next) {
  const errors = validateResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Validation errors",
      errors: errors.array(),
    });
  }
  next();
}

const registerUserValidationRules = [
  body("username")
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 3, max: 20 })
    .withMessage("Username must be between 3 and 20 characters long"),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be a valid email"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

module.exports = {
  validateResult,
  registerUserValidationRules,
};
