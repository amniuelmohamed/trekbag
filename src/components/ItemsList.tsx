import Select from "react-select";
import { sortingOptions } from "../lib/constants";
import EmptyView from "./EmptyView";
import Item from "./Item";
import { useMemo, useState } from "react";
import { useItemsStore } from "../stores/itemsStore";

export default function ItemsList() {
    const items = useItemsStore((state) => state.items);

    const [sortingOption, setSortingOption] = useState(sortingOptions[0]);

    const handleSelectSorting = (option: typeof sortingOption | null) => {
        if (option) {
            setSortingOption(option);
        }
    };

    const sortedItems = useMemo(() => {
        if (sortingOption.value === "packed") {
            return [...items].sort(
                (a, b) => Number(b.packed) - Number(a.packed)
            );
        }

        if (sortingOption.value === "unpacked") {
            return [...items].sort(
                (a, b) => Number(a.packed) - Number(b.packed)
            );
        }

        return items;
    }, [items, sortingOption]);

    return (
        <ul
            className={
                items.length === 0
                    ? "h-full flex items-center justify-center"
                    : ""
            }
        >
            {items.length === 0 && <EmptyView />}

            {items.length > 0 && (
                <section className="px-7 py-5">
                    <Select
                        defaultValue={sortingOption}
                        onChange={handleSelectSorting}
                        options={sortingOptions}
                    />
                </section>
            )}

            {sortedItems.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </ul>
    );
}
