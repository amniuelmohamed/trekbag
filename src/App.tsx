import BackgroundHeading from "./layout/BackgroundHeading";
import Container from "./layout/Container";
import Footer from "./layout/Footer";

function App() {
    return (
        <>
            <BackgroundHeading />
            <div className="max-w-5xl mx-auto px-3">
                <Container />
                <Footer />
            </div>
        </>
    );
}

export default App;
