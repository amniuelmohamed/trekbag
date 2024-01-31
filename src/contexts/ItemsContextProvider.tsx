import { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/constants";

type ItemsContextType = {
    items: typeof initialItems;
    setItems: React.Dispatch<React.SetStateAction<typeof initialItems>>;
    handleAddItem: (itemText: string) => void;
    handleToggleItem: (itemId: number) => void;
    handleRemoveItem: (itemId: number) => void;
    handleRemoveAllItems: () => void;
    handleMarkAllItemsAsPacked: () => void;
    handleMarkAllItemsAsUnpacked: () => void;
    handleResetToInitial: () => void;
};

export const ItemsContext = createContext<ItemsContextType | null>(null);

export default function ItemsContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem("items")
            ? JSON.parse(localStorage.getItem("items") as string)
            : null;

        return savedItems && typeof savedItems === typeof initialItems
            ? (savedItems as typeof initialItems)
            : initialItems;
    });

    const savetoLocalStorage = () => {
        localStorage.setItem("items", JSON.stringify(items));
    };

    const handleAddItem = (itemText: string) => {
        const newItem = {
            id: Date.now(),
            name: itemText,
            packed: false,
        };

        setItems([...items, newItem]);
    };

    const handleToggleItem = (itemId: number) => {
        const newItems = items.map((item) =>
            item.id === itemId ? { ...item, packed: !item.packed } : item
        );
        setItems(newItems);
    };

    const handleRemoveItem = (itemId: number) => {
        const newItems = items.filter((item) => item.id !== itemId);
        setItems(newItems);
    };

    const handleRemoveAllItems = () => {
        setItems([]);
    };

    const handleMarkAllItemsAsPacked = () => {
        const newItems = items.map((item) => ({ ...item, packed: true }));
        setItems(newItems);
    };

    const handleMarkAllItemsAsUnpacked = () => {
        const newItems = items.map((item) => ({ ...item, packed: false }));
        setItems(newItems);
    };

    const handleResetToInitial = () => {
        setItems(initialItems);
    };

    useEffect(() => {
        savetoLocalStorage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items]);

    return (
        <ItemsContext.Provider
            value={{
                items,
                setItems,
                handleAddItem,
                handleToggleItem,
                handleRemoveItem,
                handleRemoveAllItems,
                handleMarkAllItemsAsPacked,
                handleMarkAllItemsAsUnpacked,
                handleResetToInitial,
            }}
        >
            {children}
        </ItemsContext.Provider>
    );
}
