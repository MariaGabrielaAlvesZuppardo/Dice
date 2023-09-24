import create from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStore = create(
  persist(
    (set) => ({
      history: [],
      addToHistory: (entry) =>
        set((state) => ({ history: [entry, ...state.history] })),
    }),
    {
      name: 'dice-game-storage',
      getStorage: () => AsyncStorage,
    }
  )
);

export default useStore;
