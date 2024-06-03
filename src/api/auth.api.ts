import api from "@/lib/axios";
import { LoginFormData } from "@/types/auth.types";
import { isAxiosError } from "axios";

export async function login(loginFormData: LoginFormData) {
  try {
    const response = await api.post("/login", loginFormData);
    return response.data;

  } catch (error) {
    if(isAxiosError(error)) {
      throw new Error(error.response?.data.message)
    }
  }
}