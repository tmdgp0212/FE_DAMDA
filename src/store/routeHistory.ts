import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface RouteStore {
  history: string[];
  setHistory: (path: string) => void;
}

const useRouteStore = create<RouteStore>()(
  persist(
    (set) => ({
      history: [],

      setHistory: (path) => {
        set((state) => {
          console.log('history =' + state.history);
          console.log('path =' + path);
          if (path === '/login') return { ...state };
          if (state.history.length > 5) state.history.splice(4, 1);
          return { ...state, history: [path, ...state.history] };
        });
      },
    }),
    { name: 'path-history' },
  ),
);

export default useRouteStore;
