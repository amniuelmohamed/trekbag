import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonsGroup() {
    const markAllAsPacked = useItemsStore((state) => state.markAllAsPacked);
    const markAllAsUnpacked = useItemsStore((state) => state.markAllAsUnpacked);
    const resetToInitial = useItemsStore((state) => state.resetToInitial);
    const removeAllItems = useItemsStore((state) => state.removeAllItems);

    const secondaryButtons = [
        {
            text: "Mark all as complete",
            onClick: markAllAsPacked,
        },
        {
            text: "Mark all as incomplete",
            onClick: markAllAsUnpacked,
        },
        {
            text: "Reset to initial",
            onClick: resetToInitial,
        },
        {
            text: "Remove all items",
            onClick: removeAllItems,
        },
    ];

    return (
        <div className="flex flex-col gap-2">
            {secondaryButtons.map((button) => (
                <Button
                    key={button.text + button.onClick.toString()}
                    onClick={button.onClick}
                >
                    {button.text}
                </Button>
            ))}
        </div>
    );
}
