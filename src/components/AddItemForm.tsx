import { useRef, useState } from "react";
import Button from "./Button";
import { useItemsStore } from "../stores/itemsStore";

export default function AddItemForm() {
    const addItem = useItemsStore((state) => state.addItem);

    const [itemText, setItemText] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const trimmedText = itemText.trim();
        if (!trimmedText) {
            inputRef.current?.focus();
            return;
        }

        addItem(trimmedText);
        setItemText("");
        inputRef.current?.focus();
    };
    return (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <label htmlFor="item" className="font-bold text-lg text-yellow-900">
                Add an item
            </label>
            <input
                ref={inputRef}
                type="text"
                id="item"
                value={itemText}
                onChange={(e) => setItemText(e.target.value)}
                autoFocus
                spellCheck={false}
                placeholder="Toothbrush..."
                className="py-3 px-5 placeholder:italic border border-gray-300 rounded-md outline-none focus:border-yellow-900 transition-all"
            />
            <Button>Add to list</Button>
        </form>
    );
}
