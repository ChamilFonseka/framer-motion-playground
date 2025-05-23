import { motion, useScroll, useSpring } from "motion/react";

function Scroll() {

    // Overall scroll progress
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return (
        <div>
            <h1 className="text-5xl font-bold my-8 text-amber-500 underline">Scroll Animations</h1>

            {/* Progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-2 bg-amber-500 origin-left z-50"
                style={{ scaleX }}
            />

            <div className="h-screen grid place-items-center">
                <h1 className="text-5xl font-bold text-amber-500">
                    Scoll Down
                </h1>
            </div>
        </div>
    );
}
export default Scroll;