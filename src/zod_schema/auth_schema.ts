import { z } from 'zod'

export const registerSchema = z.object({
  body: z.object({
    username: z.string({
      required_error: 'Username is required !'
      , invalid_type_error: 'Username must be string'
    }).min(6, 'Username must be more than 6 char')
      .max(15, 'Username must be less than 15 char'),

    password: z.string({
      required_error: 'Password is required !'
      , invalid_type_error: 'Password must be string',
    }).min(6, 'Password must be more than 6 char')
      .max(15, 'Password must be less than 15 char'),

    email: z.string({ required_error: 'Email is required !' }),
  }),

});

export const loginSchema = z.object({
  body: z.object({
    username: z.string({
      required_error: 'Username is required !'
      , invalid_type_error: 'Username must be string'
    }),
    password: z.string({
      required_error: 'Password is required !'
      , invalid_type_error: 'Password must be string',
    }),
  }),

});