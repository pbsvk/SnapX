import { z } from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message: 'Too short'}).max(50),
    username: z.string().min(5, {message: 'Username must be atleast 5 characters long'}).max(50, {message: 'Username must be atmost 50 characters long'}),
    email: z.string().email(),
    password: z.string().min(8, {message: 'Password must be atleast 8 characters long'}).max(50, {message: 'Password must be atmost 50 characters long'}),
  })
  export const SigninValidation = z.object({
    // name: z.string().min(2, {message: 'Too short'}).max(50),
    // username: z.string().min(5, {message: 'Username must be atleast 5 characters long'}).max(50, {message: 'Username must be atmost 50 characters long'}),
    email: z.string().email(),
    password: z.string().min(8, {message: 'Password must be atleast 8 characters long'}).max(50, {message: 'Password must be atmost 50 characters long'}),
  })
  export const PostValidation = z.object({
    caption: z.string().min(2, {message: 'Caption must be atleast 2 characters long'}).max(1000, {message: 'Caption must be atmost 1000 characters long'}),
    file:z.custom<File[]>(),
    location: z.string().min(2, {message: 'Location must be atleast 2 characters long'}).max(100, {message: 'Location must be atmost 100 characters long'}),
    tags: z.string().min(2, {message: 'Tags must be atleast 2 characters long'}).max(100, {message: 'Tags must be atmost 100 characters long'}),
  })