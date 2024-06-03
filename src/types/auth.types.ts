import { z } from "zod";


// Login Form
export const LoginSchema = z.object({
    password: z.string().min(6, {
      message: "El campo debe tener al menos 6 caracteres.",
    }),
    email: z.string().email({
      message: "El campo debe ser de tipo email.",
    }),
  });

  export type Login = z.infer<typeof LoginSchema>;
  export type LoginFormData = Pick<Login, "email" | "password">;