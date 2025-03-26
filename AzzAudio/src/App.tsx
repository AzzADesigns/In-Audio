
import { Banner } from "./components/header/Banner";
import { NavBar } from "./components/NavBar";
import { Effect } from "./components/Effect";

function App() {
    console.log("app renderiza")
    return (
        <div className="min-h-screen flex-center bg-[linear-gradient(to_bottom_right,#013027,#01846a,#00c8a0,#017c63)]">
                <Effect>
                    <div className=" flex-center z-50  ">
                        <NavBar />
                        <header className="w-full flex-center">
                            <Banner />
                            
                        </header>
                        <main>
                            
                        </main>
                        <footer>
                            
                        </footer>
                    </div>
                </Effect>
        </div>
    );
}

export default App;
