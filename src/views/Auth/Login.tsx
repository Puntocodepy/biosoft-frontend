'use client';

// Libraries
import { login } from "@/api/auth.api";
import { LoginFormData, LoginSchema } from "@/types/auth.types";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useUserStore } from "@/store/Auth.store";
import ButtonLoader from "@/components/shared/ButtonLoader";

// Zod
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Shadcn UI
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";


const Login = () => {
  const { addUser } = useUserStore();

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
  const query = useMutation({
    mutationFn: login,
    mutationKey: ["login"],
    onSuccess: (data) => {
      addUser(data.user);
      localStorage.setItem('token', data.access_token);
      window.location.href = "/admin/dashboard";
      toast.success("Login successful", data);
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const onSubmit = (data: LoginFormData) => query.mutate(data);

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

        <ButtonLoader
          isPending={query.isPending}
          submitText="Iniciar Sesion"
          loadingText="Iniciando..."
        />
      </form>
    </Form>
  )
}

export default Login
