import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";

function InView() {
    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
        if (inView) {
            console.log("Element is in view");
        } else {
            console.log("Element is out of view");
        }
    }, [inView]);

    return (
        <>
            <div className="h-screen grid place-items-center">
                <h1 className="text-5xl font-bold text-amber-500">
                    Scoll Down
                </h1>
            </div>

            <div className="h-screen grid place-items-center">
                <motion.h1 className="text-5xl font-bold text-amber-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, scale: 2 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                >
                    Further Down
                </motion.h1>
            </div>

            <div className="h-screen grid place-items-center">
                <h1 ref={ref} className="text-5xl font-bold text-amber-500"
                    style={{ opacity: inView ? 1 : 0, color: inView ? "red" : "", transition: "all 2s" }}
                >
                    Stop!
                </h1>
            </div>
        </>

    );
}
export default InView;