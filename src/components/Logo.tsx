export default function Logo() {
    return (
        <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
                <span
                    key={i}
                    className="w-5 h-5 rounded-full bg-yellow-950 opacity-40"
                ></span>
            ))}
        </div>
    );
}
