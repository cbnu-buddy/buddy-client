import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const faqTabNameStore = create(
  devtools((set) => ({
    tabName: 'topQuestion',
    updateTabName: (newTabName: string) =>
      set(() => ({
        tabName: newTabName,
      })),
  }))
);
