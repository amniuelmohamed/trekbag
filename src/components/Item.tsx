import { initialItems } from "../lib/constants";
import { useItemsStore } from "../stores/itemsStore";

type ItemProps = {
    item: (typeof initialItems)[number];
};

export default function Item({ item }: ItemProps) {
    const removeItem = useItemsStore((state) => state.removeItem);
    const toggleItem = useItemsStore((state) => state.toggleItem);

    return (
        <li className="border-b border-black/10 flex justify-between items-center gap-5">
            <label className="flex-grow flex items-center gap-2 pl-7 py-5 group cursor-pointer">
                <input
                    type="checkbox"
                    className="hidden peer/checkbox"
                    checked={item.packed}
                    onChange={() => {
                        toggleItem(item.id);
                    }}
                />
                <span
                    className="w-4 h-4 bg-white rounded-sm border border-yellow-900 opacity-50 group-hover:opacity-100 transition duration-300
                            peer-checked/checkbox:bg-yellow-900 peer-checked/checkbox:opacity-100 peer-checked/checkbox:border-transparent"
                ></span>
                <span>{item.name}</span>
            </label>
            <button
                className="mr-7 hover:scale-105 transition"
                onClick={() => removeItem(item.id)}
            >
                ❌
            </button>
        </li>
    );
}
