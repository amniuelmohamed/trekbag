import ItemsCount from "./ItemsCount";
import Logo from "./Logo";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-3 sm:px-7 sm:py-4 bg-[#ffebcd80] shadow">
            <Logo />
            <ItemsCount />
        </header>
    );
}
