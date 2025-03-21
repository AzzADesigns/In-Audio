import { Banner } from "./components/header/Banner";
import { NavBar } from "./components/NavBar";


function App() {
    return (
        <div className="min-h-screen flex-center bg-[linear-gradient(to_bottom_right,#013027,#01846a,#00c8a0,#017c63)]">
            <div className="bg-[#020202] h-[95%] w-[95%] flex-center mt-2 2xl:mt-10 2xl:mb-10">
                <NavBar/>
                <header className="w-full flex-center">
                    <Banner/>
                </header>
                <main>

                </main>
                <footer>

                </footer>
            </div>
        </div>
    );
}

export default App;
