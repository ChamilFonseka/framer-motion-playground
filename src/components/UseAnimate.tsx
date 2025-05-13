import { stagger } from "motion";
import { useAnimate } from "motion/react";

const UseAnimate = () => {
    const [scope1, animate1] = useAnimate();
    const [scope2, animate2] = useAnimate();

    const handleClick1 = async () => {
        await animate1("#animate", { borderRadius: "50%" }, { duration: 0.5, ease: "easeIn" });
        await animate1("#animate", { x: 600 }, { duration: 1, type: "spring" });
        await animate1("#animate", { x: 0 }, { duration: 1, type: "spring" });
        await animate1("#animate", { borderRadius: "0%" }, { duration: 0.5, ease: "easeIn" });
    };

    const handleClick2 = async () => {
        animate2([
            ["#circles", { width: 680 }, { duration: 1, ease: "backInOut", at: 1 }],
            [".circle", { x: 600 }, { duration: 1, type: "spring", delay: stagger(0.1), at: 2 }],
            [".circle", { x: 0 }, { duration: 1, type: "spring", delay: stagger(0.1), at: 3 }],
            ["#circles", { width: 64 }, { duration: 0.5, ease: "easeIn", at: 3 }],
        ]);
    };

    return (
        <div className="p-4">
            <div ref={scope1} className="flex items-center gap-8">
                <button
                    onClick={handleClick1}
                    className="h-10 px-4 py-2 bg-blue-600 text-white rounded"
                >
                    Animate
                </button>

                <div id="animate" className="size-32 bg-cyan-500" />
            </div>

            <div ref={scope2} className="flex items-center gap-8">
                <button
                    onClick={handleClick2}
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                    Animate
                </button>

                <ul id="circles" className="mt-8 flex flex-col gap-4 bg-sky-200 p-4 rounded w-16">
                    <li className="circle size-8 rounded-full bg-fuchsia-300"></li>
                    <li className="circle size-8 rounded-full bg-fuchsia-300"></li>
                    <li className="circle size-8 rounded-full bg-fuchsia-300"></li>
                    <li className="circle size-8 rounded-full bg-fuchsia-300"></li>
                    <li className="circle size-8 rounded-full bg-fuchsia-300"></li>
                </ul>
            </div>
        </div >
    );
};
export default UseAnimate;