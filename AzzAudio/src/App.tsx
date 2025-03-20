import { Banner } from "./components/header/Banner";
import { NavBar } from "./components/NavBar";


function App() {
    return (
        <div className="min-h-screen flex-center bg-gradient-to-br from-[#00FFCC] via-[#02271F] via-[#00DEB2] via-[#020202] to-[#D9D9D9]">
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
