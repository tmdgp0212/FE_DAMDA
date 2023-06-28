import { UserData } from '@/types/auth';
import { persist } from 'zustand/middleware';
import create from 'zustand';

export interface AuthStore {
  user: UserState;
  setUser: (data: UserData) => void;
  logout: () => void;
}

export interface UserState {
  isLogin: boolean | null;
  data: UserData | null;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: {
        isLogin: null,
        data: null,
      },
      setUser: (data: UserData) => set((state) => ({ user: { isLogin: true, data } })),
      logout: () => set((state) => ({ user: { isLogin: false, data: null } })),
    }),
    {
      name: 'loginState',
    },
  ),
);

export default useAuthStore;
