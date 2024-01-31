import { create } from "zustand";
import { initialItems } from "../lib/constants";
import { persist } from "zustand/middleware";

type ItemsState = {
    items: typeof initialItems;
    addItem: (itemText: string) => void;
    toggleItem: (id: number) => void;
    removeItem: (id: number) => void;
    removeAllItems: () => void;
    markAllAsPacked: () => void;
    markAllAsUnpacked: () => void;
    resetToInitial: () => void;
};

export const useItemsStore = create<ItemsState>()(
    persist(
        (set) => ({
            items: initialItems,
            addItem: (itemText: string) => {
                const newItem = {
                    id: Date.now(),
                    name: itemText,
                    packed: false,
                };

                set((state) => ({
                    items: [...state.items, newItem],
                }));
            },
            toggleItem: (id: number) =>
                set((state) => ({
                    items: state.items.map((item) => {
                        if (item.id === id) {
                            return {
                                ...item,
                                packed: !item.packed,
                            };
                        }

                        return item;
                    }),
                })),
            removeItem: (id: number) =>
                set((state) => ({
                    items: state.items.filter((item) => item.id !== id),
                })),
            removeAllItems: () =>
                set(() => ({
                    items: [],
                })),
            markAllAsPacked: () =>
                set((state) => ({
                    items: state.items.map((item) => ({
                        ...item,
                        packed: true,
                    })),
                })),
            markAllAsUnpacked: () =>
                set((state) => ({
                    items: state.items.map((item) => ({
                        ...item,
                        packed: false,
                    })),
                })),
            resetToInitial: () =>
                set(() => ({
                    items: initialItems,
                })),
        }),
        { name: "items" }
    )
);
