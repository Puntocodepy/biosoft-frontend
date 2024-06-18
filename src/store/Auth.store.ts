import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/types/auth.types'; // Assuming your User interface is defined here

// Interface for UserState with optional user object
interface UserState {
  user?: User;
  token: string;
  addUser: (data: User) => void;
  addToken: (data: string) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      token: '',
      user: undefined,
      addUser: (data: User) => set({ user: data }),
      addToken: (data: string) => set({ token: data }),
    }),
    { name: 'auth' }
  )
);