type ButtonProps = {
    btnType?: "secondary";
    onClick?: () => void;
    children: string;
};

export default function Button({ btnType, onClick, children }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`bg-yellow-900 text-center text-white py-3 px-5 rounded-md ${
                btnType === "secondary"
                    ? "text-sm opacity-80 hover:opacity-100 transition-opacity"
                    : ""
            }`}
        >
            {children}
        </button>
    );
}
