import { useRef, ReactNode, useEffect } from "react";

interface Props {
    children: ReactNode;
}

export const Effect: React.FC<Props> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const cellsRef = useRef<(HTMLDivElement | null)[]>([]);
    const mousePosition = useRef({ x: 0, y: 0 });

    const updateCells = () => {
        if (!containerRef.current) return;
        
        const cols = 10;
        const cellWidth = containerRef.current.clientWidth / cols - 1;
        const cellHeight = containerRef.current.clientHeight / cols - 1;
        
        cellsRef.current.forEach((cell, index) => {
            if (!cell) return;
            
            const cellX = (index % cols) * (cellWidth + 2) + cellWidth / 2;
            const cellY = Math.floor(index / cols) * (cellHeight + 2) + cellHeight / 2;
            const distance = Math.sqrt(
                Math.pow(mousePosition.current.x - cellX, 2) + 
                Math.pow(mousePosition.current.y - cellY, 2)
            );
            
            cell.style.boxShadow = distance < 5000 
                ? `0 0 30px 1px rgba(255, 255, 255, ${1 - distance / 80})`
                : 'none';
        });
        
        requestAnimationFrame(updateCells);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            mousePosition.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        }
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        const animationId = requestAnimationFrame(updateCells);
        
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    },);

    const setCellRef = (index: number) => (el: HTMLDivElement | null) => {
        cellsRef.current[index] = el;
    };

    return (
        <div 
            ref={containerRef}
            className="bg-[#020202] h-[95%] w-[95%] flex-center mt-2 2xl:mt-10 2xl:mb-10 relative overflow-hidden"
        >
            <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-[1px] z-0">
                {Array.from({ length: 100 }).map((_, index) => (
                    <div
                        key={index}
                        ref={setCellRef(index)}
                        style={{
                            transition: 'box-shadow 0.01s linear',
                        }}
                    />
                ))}
            </div>
            {children}
        </div>
    );
};