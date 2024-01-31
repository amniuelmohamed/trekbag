import Header from "../components/Header";
import ItemsList from "../components/ItemsList";
import Sidebar from "../components/Sidebar";

export default function Container() {
    return (
        <main className="mt-16 sm:mt-24 md:mt-28 bg-white rounded-lg overflow-hidden shadow h-[50rem] sm:h-[45rem]">
            <Header />
            <div className="flex-grow flex flex-col sm:flex-row h-[calc(50rem-48px)] sm:h-[calc(100%-56px)]">
                <div className="flex-grow overflow-y-auto">
                    <ItemsList />
                </div>
                <div className="flex-none">
                    <Sidebar />
                </div>
            </div>
        </main>
    );
}
