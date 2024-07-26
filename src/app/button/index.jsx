"use client"

import { motion } from "framer-motion";
import { MoveDownRight } from "lucide-react";
import { useRef, useState } from 'react';

export default function ButtonCmp({children,
    onClick,
    type = 'button',
    disabled = false,
    variant = 'primary',}) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX, y: middleY });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div className="">
            <motion.button
                ref={ref}
                onMouseMove={handleMouse}
                onMouseLeave={reset}
                animate={position}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, backgroundColor: "#1a202c", color: "#fff" }}
                transition={{ type: "spring", stiffness: 50, damping: 10 }}
                className="rounded-3xl flex py-2 absolute bg-transparent px-3 mt-3 border border-black text-black"
            >
             <span><MoveDownRight></MoveDownRight></span>{children}
            </motion.button>
        </motion.div>
    );
}
