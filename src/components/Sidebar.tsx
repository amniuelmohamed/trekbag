import AddItemForm from "./AddItemForm";
import ButtonsGroup from "./ButtonsGroup";

export default function Sidebar() {
    return (
        <aside className="flex flex-col gap-10 sm:justify-between px-7 py-5 bg-[#ffebcd4d] shadow h-full">
            <AddItemForm />
            <ButtonsGroup />
        </aside>
    );
}
