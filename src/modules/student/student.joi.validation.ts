import Joi from "joi";

// Name JoiValidation
const nameJoiValidation = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .regex(/^[A-Z][a-z]*$/)
    .message("{#label} must start with a capital letter")
    .required()
    .messages({
      "string.empty": "First name is required",
      "string.max": "First name can't be greater than 20 characters",
    }),
  middleName: Joi.string().allow(null, "").optional(),
  lastName: Joi.string()
    .regex(/^[A-Za-z]+$/)
    .message("{#label} must contain only alphabets")
    .required()
    .messages({
      "string.empty": "Last name is required",
    }),
});

// Guardian JoiValidation
const guardianJoiValidation = Joi.object({
  fatherName: Joi.string().required().messages({
    "string.empty": "Father's name is required",
  }),
  fatherContactNo: Joi.string().pattern(/^\d+$/).required().messages({
    "string.empty": "Father's contact number is required",
    "string.pattern.base": "Father's contact number must be numeric",
  }),
  fatherOccupation: Joi.string().required().messages({
    "string.empty": "Father's occupation is required",
  }),
  motherName: Joi.string().required().messages({
    "string.empty": "Mother's name is required",
  }),
  motherContactNo: Joi.string().pattern(/^\d+$/).required().messages({
    "string.empty": "Mother's contact number is required",
    "string.pattern.base": "Mother's contact number must be numeric",
  }),
  motherOccupation: Joi.string().required().messages({
    "string.empty": "Mother's occupation is required",
  }),
});

// Main Student JoiValidation
export const studentJoiJoiValidation = Joi.object({
  id: Joi.string().required().messages({
    "string.empty": "Student ID is required",
  }),
  name: nameJoiValidation.required().messages({
    "object.base": "Student name is required",
  }),
  gender: Joi.string().valid("Male", "Female", "Others").required().messages({
    "any.only": "{#label} must be Male, Female, or Others",
    "string.empty": "Gender is required",
  }),
  dateOfBirth: Joi.string().isoDate().required().messages({
    "string.empty": "Date of birth is required",
    "string.isoDate": "Date of birth must be in ISO date format",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Email must be a valid email address",
  }),
  contactNo: Joi.string().pattern(/^\d+$/).required().messages({
    "string.empty": "Contact number is required",
    "string.pattern.base": "Contact number must be numeric",
  }),
  emergencyContactNo: Joi.string().pattern(/^\d+$/).required().messages({
    "string.empty": "Emergency contact number is required",
    "string.pattern.base": "Emergency contact number must be numeric",
  }),
  bloodGroup: Joi.string()
    .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
    .required()
    .messages({
      "any.only": "{#label} must be a valid blood group",
      "string.empty": "Blood group is required",
    }),
  presentAddress: Joi.string().required().messages({
    "string.empty": "Present address is required",
  }),
  permanetAddress: Joi.string().required().messages({
    "string.empty": "Permanent address is required",
  }),
  guardian: guardianJoiValidation.required().messages({
    "object.base": "Guardian information is required",
  }),
  profileImage: Joi.string().uri().optional().messages({
    "string.uri": "Profile image must be a valid URL",
  }),
  isActive: Joi.string().valid("Active", "blocked").default("Active").messages({
    "any.only": "{#label} must be Active or blocked",
  }),
});
