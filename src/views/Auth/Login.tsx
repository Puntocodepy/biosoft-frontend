'use client';

// Libraries
import { login } from "@/api/auth.api";
import { LoginFormData, LoginSchema } from "@/types/auth.types";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import { useUserStore } from "@/store/Auth.store";
import BtnLoader from "@/components/shared/BtnLoader";

// Zod
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Shadcn UI
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";


const Login = () => {
  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const { addUser, addToken } = useUserStore();

  // Define the form
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  /**
   * useMutation hook for login
   * @param data - LoginFormData
   */
  const { mutate } = useMutation({
    mutationFn: login,
    onMutate: () => {
      setIsSubmitting(true);
    },
    onSuccess: (data) => {
      addUser(data.user);
      addToken(data.access_token);
      toast.success("Login successful", data);
    },
    onError: (error) => {
      toast.error(error.message)
    },
    onSettled: () => {
      setIsSubmitting(false);
    }
  })

  const onSubmit = (data: LoginFormData) => mutate(data);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Field email--------------------------- */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Field Password------------------------ */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mt-5">
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {isSubmitting ? (
          <BtnLoader text="Iniciando..." />
        ) : (
          <Button className='w-full text-white mt-6'>
            Iniciar Sesión
          </Button>
        )}
      </form>
    </Form>
  )
}

export default Login
