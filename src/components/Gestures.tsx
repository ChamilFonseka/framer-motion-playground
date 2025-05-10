import { motion } from "motion/react";
import { useRef, useState } from "react";

function Gestures() {
    const constraintsRef = useRef(null);
    const [activeDirection, setActiveDirection] = useState<"x" | "y" | null>(null);
    return (
        <section className="overflow-hidden p-8">
            <h1 className="text-5xl font-bold my-8 text-amber-500 underline">Basics</h1>
            <div className="flex flex-col gap-8">

                <motion.div className="size-[100px] bg-cyan-500 text-white grid place-items-center"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 1 }}
                    onHoverStart={event => { }}
                    onHoverEnd={event => { }}
                >
                    Hover 1
                </motion.div>

                <motion.div className="size-[100px] bg-cyan-500 text-white grid place-items-center"
                    whileHover={{ scale: 1.2, transition: { duration: 1 } }}
                >
                    Hover 2
                </motion.div>

                <motion.div className="size-[100px] bg-cyan-500 text-white grid place-items-center"
                    whileTap={{ scale: 0.9 }}
                >
                    Tap
                </motion.div>

                <motion.div ref={constraintsRef} className="p-16 border-2 border-dashed border-cyan-500">
                    <motion.div className="size-[100px] bg-cyan-500 text-white grid place-items-center"
                        drag
                        dragConstraints={constraintsRef}
                        whileDrag={{ scale: 1.2, backgroundColor: "#f00" }}
                    >
                        Drag
                    </motion.div>
                </motion.div>
                
                <motion.div className="size-[100px] bg-cyan-500 text-white grid place-items-center"
                    drag
                    dragDirectionLock
                    onDirectionLock={(direction) => setActiveDirection(direction)}
                    onDragEnd={() => setActiveDirection(null)}
                    dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
                    dragElastic={0.2}
                    whileDrag={{ cursor: "grabbing" }}
                >
                    DirectionLock
                </motion.div>
            </div>
        </section >
    );
}
export default Gestures;