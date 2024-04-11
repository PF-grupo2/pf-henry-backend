import { request, response } from "express";
import { validationResult } from "express-validator";

const fieldsValidate = (req = request, res = response, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors,
    });
  }
  next();
};

export default { fieldsValidate };
