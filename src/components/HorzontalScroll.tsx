import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function HorzontalScroll() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

    // Log scrollYProgress value on change
    scrollYProgress.on("change", (progress) => {
        console.log("Scroll Progress:", progress);
    });

    return (
        <div>
            <h1 className="text-5xl font-bold my-8 text-amber-500 underline">
                Horizontal Scroll
            </h1>

            <div className="min-h-[40vh] flex items-center justify-center bg-slate-100">
                <div className="bg-emerald-500 p-10 rounded-lg text-white text-center">
                    <h2 className="text-3xl font-bold">Scroll down!</h2>
                </div>
            </div>

            {/* main container */}
            <section ref={containerRef} className="bg-sky-200 p-8 h-[200vh] relative">

                {/* sticky container */}
                <div className="sticky top-0 h-screen bg-amber-200 grid place-items-center overflow-hidden">

                    {/* scrolling container */}
                    <motion.div
                        className="bg-amber-500"
                        style={{ x }}
                    >
                        <div className="flex items-center gap-12 p-8">

                            {Array.from({ length: 10 }).map((_, index) => (
                                <motion.div
                                    key={index}
                                    className="size-96 bg-white rounded-lg shadow-lg flex items-center justify-center text-2xl font-bold text-amber-500 border-4 border-amber-300"
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    {index + 1}
                                </motion.div>
                            ))}

                        </div>
                    </motion.div>

                </div>
            </section>

            <div className="min-h-[40vh] flex items-center justify-center bg-slate-100">
                <div className="bg-emerald-500 p-10 rounded-lg text-white text-center">
                    <h2 className="text-3xl font-bold">That's it!</h2>
                </div>
            </div>
        </div>
    );
}

export default HorzontalScroll;