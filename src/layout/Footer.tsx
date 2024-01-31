export default function Footer() {
    const year = new Date().getFullYear();
    const version = "1.5";
    return (
        <footer className="flex justify-between mx-3 mt-2 text-yellow-900">
            <small>&copy; {year}. Copyright by Mohamed.</small>
            <small>
                Version <b>{version}</b>
            </small>
        </footer>
    );
}
