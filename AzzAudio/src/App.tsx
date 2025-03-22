import { useState, useEffect, useRef } from "react";
import { Banner } from "./components/header/Banner";
import { NavBar } from "./components/NavBar";

function App() {
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (e: MouseEvent) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="min-h-screen flex-center bg-[linear-gradient(to_bottom_right,#013027,#01846a,#00c8a0,#017c63)]">
            <div 
                ref={containerRef}
                className="bg-[#020202] h-[95%] w-[95%] flex-center mt-2 2xl:mt-10 2xl:mb-10 relative overflow-hidden"
            >
                <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-[1px] z-0">
                    {Array.from({ length: 100 }).map((_, index) => {
                        const cols = 10;
                        const cellWidth = containerRef.current ? containerRef.current.clientWidth / cols - 1 : 0;
                        const cellHeight = containerRef.current ? containerRef.current.clientHeight / cols - 1 : 0;
                        const cellX = (index % cols) * (cellWidth + 2) + cellWidth / 2;
                        const cellY = Math.floor(index / cols) * (cellHeight + 2) + cellHeight / 2;

                        const distance = Math.sqrt(
                            Math.pow(mousePosition.x - cellX, 2) + Math.pow(mousePosition.y - cellY, 2)
                        );

                        return (
                            <div
                                key={index}
                                className="bg-black"
                                style={{
                                    width: `${cellWidth}px`,
                                    height: `${cellHeight}px`,
                                    boxShadow: distance < 5000 
                                        ? `0 0 30px 1px rgba(255, 255, 255, ${1 - distance / 80})`
                                        : 'none',
                                    transition: 'box-shadow 0.01s linear',
                                }}
                            />
                        );
                    })}
                </div>

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
            </div>
        </div>
    );
}

export default App;
