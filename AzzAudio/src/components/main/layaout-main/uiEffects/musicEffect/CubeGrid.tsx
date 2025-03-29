import { useState, useEffect } from "react";

export const CubeGrid = () => {
    const rows = 7; 
    const cols = 10; 
    const [columnHeights, setColumnHeights] = useState(Array(cols).fill(0));

    useEffect(() => {
        const interval = setInterval(() => {
            setColumnHeights(
                Array.from({ length: cols }, () => Math.floor(Math.random() * (rows)))
            );
        }, 500);

        return () => clearInterval(interval);
    }, []);
    
    console.log("render")
    return (
        <div 
            className="grid w-fit h-fit"
            style={{
                gridTemplateColumns: `repeat(${cols}, 10px)`,
                gridTemplateRows: `repeat(${rows}, 10px)`,
            }}
        >
            {Array.from({ length: cols * rows }).map((_, i) => {
                const colIndex = i % cols;
                const rowIndex = Math.floor(i / cols);
                const isActive = rowIndex >= rows - columnHeights[colIndex]; 
                return (
                    <div 
                        key={i} 
                        className={`w-[6px] h-[6px] transition-all duration-500 ${
                            isActive ? "bg-secundary" : "bg-transparent"
                        }`}
                    ></div>
                );
            })}
        </div>
    );
};
