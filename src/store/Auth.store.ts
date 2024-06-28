import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/types/auth.types';

// Interface for UserState with optional user object
interface UserState {
  user?: User;
  addUser: (data: User) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: undefined,
      addUser: (data: User) => set({ user: data })
    }),
    { name: 'auth' }
  )
);