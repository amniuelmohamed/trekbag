import { useItemsStore } from "../stores/itemsStore";

export default function ItemsCount() {
    const items = useItemsStore((state) => state.items);
    const totalItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;

    return (
        <p className="text-yellow-900 font-medium">
            <b>{packedItems}</b> / {totalItems} Items packed
        </p>
    );
}
