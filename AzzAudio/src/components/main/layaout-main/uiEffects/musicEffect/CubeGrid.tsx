import { useState, useEffect, useRef, useCallback } from "react";

export const CubeGrid = () => {
    const ROWS = 5;
    const COLS = 10;
    const STAGES = 3;
    const ANIMATION_SPEED = 0.1;
    const STAGE_DURATION = 300;

    // Uso de useState para manejar los valores que afectan el renderizado
    const [currentHeights, setCurrentHeights] = useState<number[]>(Array(COLS).fill(0));
    const [targetHeights, setTargetHeights] = useState<number[]>(Array(COLS).fill(0));
    const [stage, setStage] = useState<number>(0);

    const animationRef = useRef<number>(0);
    const lastUpdateTimeRef = useRef<number>(0);

    // Función de interpolación optimizada
    const lerp = useCallback((start: number, end: number, t: number): number => start + (end - start) * t, []);

    // Generación de alturas objetivo memoizada
    const generateTargetHeights = useCallback((): number[] => {
        switch (stage) {
            case 0:
                // Arco ascendente-descendente
                return Array.from({ length: COLS }, (_, i) =>
                    Math.floor(Math.sin((i / COLS) * Math.PI) * (ROWS - 1))
                );
            case 1:
                // Zigzag diagonal descendente
                return Array.from({ length: COLS }, (_, i) =>
                    (i % 3) * Math.floor(ROWS / 2)
                );


            default:
                // Movimiento aleatorio fluido
                return Array.from({ length: COLS }, () =>
                    Math.floor(Math.random() * ROWS)
                );
        }
    }, [stage]);

    // Configuración de intervalos para cambiar de etapa
    useEffect(() => {
        const updateStage = () => {
            setStage((prev) => (prev + 1) % STAGES);
            setTargetHeights(generateTargetHeights());
        };

        const interval = setInterval(updateStage, STAGE_DURATION);
        return () => clearInterval(interval);
    }, [generateTargetHeights]);

    // Animación optimizada con requestAnimationFrame
    useEffect(() => {
        const animate = (timestamp: number) => {
            // Control de frame rate para suavizar la animación
            if (timestamp - lastUpdateTimeRef.current > 16) { // ~60fps
                setCurrentHeights((prev) =>
                    prev.map((current, i) =>
                        Math.abs(current - targetHeights[i]) < 0.1
                            ? targetHeights[i]
                            : lerp(current, targetHeights[i], ANIMATION_SPEED)
                    )
                );
                lastUpdateTimeRef.current = timestamp;
            }
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current);
    }, [targetHeights, lerp]);

    // Renderizado optimizado
    return (
        <div
            className="grid w-fit h-fit"
            style={{
                gridTemplateColumns: `repeat(${COLS}, 10px)`,
                gridTemplateRows: `repeat(${ROWS}, 10px)`,
                gap: '4px'
            }}
        >
            {Array.from({ length: COLS * ROWS }).map((_, i) => {
                const colIndex = i % COLS;
                const rowIndex = Math.floor(i / COLS);
                const isActive = rowIndex >= ROWS - Math.round(currentHeights[colIndex]);

                return (
                    <div
                        key={`${colIndex}-${rowIndex}`}
                        className={`w-[6px] h-[6px] transition-opacity duration-100 ${
                            isActive ? "bg-secundary opacity-100" : "opacity-0"
                        }`}
                    />
                );
            })}
        </div>
    );
};
