import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

function Scroll() {

    // Overall scroll progress
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const background = useTransform(scrollYProgress, [0, 1], ["#332D56", "#FE5D26"]);
    const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    //const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 2]);
    // const opacityProgress = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

    // Fade in and scale effect
    const fadeInRef = useRef(null);
    const { scrollYProgress: fadeInProgress } = useScroll({
        target: fadeInRef,
        offset: ["start end", "center center"]
    });
    const opacityProgress = useTransform(fadeInProgress, [0, 1], [0, 1]);
    const scaleProgress = useTransform(fadeInProgress, [0, 1], [1, 2]);
    return (
        <div>
            <h1 className="text-5xl font-bold my-8 text-amber-500 underline">Scroll Animations</h1>

            {/* Progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-2 bg-amber-500 origin-left z-50"
                style={{ scaleX }}
            />
            <motion.div
                className="fixed top-4 left-0 right-0 h-2 bg-amber-500 origin-left z-50"
                style={{ width, background }}
            />

            <div className="h-screen grid place-items-center">
                <h1 className="text-5xl font-bold text-amber-500">
                    Scoll Down
                </h1>
            </div>

            <div className="grid place-items-center">
                <motion.h1 className="text-5xl font-bold text-amber-500"
                    style={{
                        scale: scaleProgress,
                        opacity: opacityProgress,
                    }}
                >
                    Keep Scrolling
                </motion.h1>
            </div>

            <div className="h-screen grid place-items-center">
                
            </div>
        </div>
    );
}
export default Scroll;