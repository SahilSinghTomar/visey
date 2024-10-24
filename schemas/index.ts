import * as z from 'zod';

export const loginSchema = z.object({
  identifier: z
    .string()
    .refine((value) => /\S+@\S+\.\S+/.test(value) || /^\d{10}$/.test(value), {
      message: 'Must be a valid email or phone number (10 digits)',
    }),
  password: z.string().min(1, 'Password is required'),
});

export const signUpSchema = z.object({
  type: z.enum(['STARTUP', 'BUSINESS']),
  name: z.string().min(1, 'Name is required'),
  identifier: z
    .string()
    .refine((value) => /\S+@\S+\.\S+/.test(value) || /^\d{10}$/.test(value), {
      message: 'Must be a valid email or phone number (10 digits)',
    }),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .refine((value) => /[A-Z]/.test(value), {
      message: 'Password must contain at least one uppercase letter',
    })
    .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
      message: 'Password must contain at least one special character',
    }),
  verificationCode: z.optional(z.string()),
});

export const listBusinessFirstStepSchema = z.object({
  businessName: z.string().min(1, 'Business name is required'),
  registeredName: z
    .string()
    .optional()
    .refine((val) => !val || val.length >= 2, {
      message: 'Minimum 2 characters',
    }),
  websiteUrl: z
    .string()
    .optional()
    .refine((val) => !val || /^https?:\/\/[^\s$.?#].[^\s]*$/.test(val), {
      message: 'Enter a valid URL',
    }),
});

export const listBusinessSecondStepSchema = z.object({
  category: z.string().min(1, 'This field cannot be left empty'),
  tags: z.optional(z.string()),
  tagsList: z.optional(z.array(z.string())),
  stdCode: z.string(),
  contactNumber: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid mobile number'),
  location: z.string().min(1, 'This field cannot be left empty'),
});

export const listBusinessSchema = listBusinessFirstStepSchema.merge(
  listBusinessSecondStepSchema
);

// First step schema
export const basicStartupFirstStepSchema = z.object({
  name: z.string().min(2, 'Minimum 2 characters'),
  registeredName: z
    .string()
    .optional()
    .refine((val) => !val || val.length >= 2, {
      message: 'Minimum 2 characters',
    }),
  websiteUrl: z
    .string()
    .optional()
    .refine((val) => !val || /^https?:\/\/[^\s$.?#].[^\s]*$/.test(val), {
      message: 'Enter a valid URL',
    }),
  contactNumber: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid mobile number'),
  location: z.string().min(1, 'This field cannot be left empty'),
});

// Second step schema
export const basicStartupSecondStepSchema = z
  .object({
    industry: z.string().min(1, 'This field cannot be left empty'),
    industryOthers: z.string().optional(),
    sector: z.string().min(1, 'This field cannot be left empty'),
    sectorOthers: z.string().optional(),
    trlLevel: z.string().min(1, 'This field cannot be left empty'),
  })
  .refine(
    (data) => {
      // Make industryOthers required if industry is 'others'
      if (data.industry === 'Others') {
        return data.industryOthers && data.industryOthers.trim().length > 0;
      }
      return true;
    },
    {
      message: 'This cannot be left empty when "Others" is selected',
      path: ['industryOthers'], // Error path for industryOthers
    }
  )
  .refine(
    (data) => {
      // Make sectorOthers required if sector is 'others'
      if (data.sector === 'Others') {
        return data.sectorOthers && data.sectorOthers.trim().length > 0;
      }
      return true;
    },
    {
      message: 'This cannot be left empty when "Others" is selected',
      path: ['sectorOthers'], // Error path for sectorOthers
    }
  );

export const startupDetailsSchema = z.object({
  name: z.string().min(2, 'Minimum 2 characters'),
  registeredName: z
    .string()
    .optional()
    .refine((val) => !val || val.length >= 2, {
      message: 'Minimum 2 characters',
    }),
  websiteUrl: z
    .string()
    .optional()
    .refine((val) => !val || /^https?:\/\/[^\s$.?#].[^\s]*$/.test(val), {
      message: 'Enter a valid URL',
    }),
  contactNumber: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid mobile number'),
  location: z.string().min(1, 'This field cannot be left empty'),
  industry: z.string().min(1, 'This field cannot be left empty'),
  industryOthers: z.string().optional(),
  sector: z.string().min(1, 'This field cannot be left empty'),
  sectorOthers: z.string().optional(),
  trlLevel: z.string().min(1, 'This field cannot be left empty'),
});
