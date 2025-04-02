import { useState, useEffect } from "react";
import { CubeGrid } from "./CubeGrid";

export const Music = () => {
    const [cols, setCols] = useState(10);
    const [rows, setRows] = useState(5);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1536) {
                // 2xl
                setCols(10);  
                setRows(5);   
            } else if (window.innerWidth >= 1024) {
                // lg
                setCols(8);  
                setRows(4);  
            } else if (window.innerWidth >= 768) {
                // md
                setCols(6);   
                setRows(4);  
            } else {
                // sm
                setCols(3); 
                setRows(3);  
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); 

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="inline-flex gap-2 2xl ml-5 items-end p-5 xl:p-5 2xl:p-2.5">
            <CubeGrid cols={cols} rows={rows} />
        </div>
    );
};
