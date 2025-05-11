import { useAnimate } from "motion/react";

const UseAnimate = () => {
    const [scope, animate] = useAnimate();

    const handleClick = async () => {
        await animate("#animate", { borderRadius: "50%" }, { duration: 0.5, ease: "easeIn" });
        await animate("#animate", { x: 600 }, { duration: 1, type: "spring" });
        await animate("#animate", { y: 200 }, { duration: 1, type: "spring" });
        await animate("#animate", { x: 0 }, { duration: 1, type: "spring" });
        await animate("#animate", { y: 0 }, { duration: 1, type: "spring" });
        await animate("#animate", { borderRadius: "0%" }, { duration: 0.5, ease: "easeIn" });
        //animate(scope.current, { rotate: 0 }, { duration: 0 }); // instantly reset
    };

    return (
        <div className="p-4" ref={scope}>
            <button
                onClick={handleClick}
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
                Animate
            </button>

            <div id="animate" className="mt-4 w-32 h-32 bg-cyan-500" />
        </div>
    );
};
export default UseAnimate;