
import { Banner } from "./components/header/Banner";
import { NavBar } from "./components/layaout/NavBar";
import { Effect } from "./components/layaout/Effect";
import { Main } from "./components/main/Main";

function App() {
    console.log("app renderiza")
    return (
        <div className="min-h-screen flex-center bg-[linear-gradient(to_bottom_right,#013027,#01846a,#00c8a0,#017c63)]">
                <Effect>
                    <div className=" flex-center z-50 w-[95%]">
                        <NavBar />
                        <header className="w-full flex-center">
                            <Banner />
                        </header>
                        <main className="w-full h-full flex-cente">
                            <Main/>
                        </main>
                        <footer>
                            
                        </footer>
                    </div>
                </Effect>
        </div>
    );
}

export default App;
