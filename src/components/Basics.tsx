import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function Basics() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <section className="overflow-hidden p-8">
      <h1 className="text-5xl font-bold my-8 text-amber-500 underline">Basics</h1>
      <div className="flex flex-col gap-8">

        <motion.div className="size-[100px] bg-cyan-500 text-white grid place-items-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          Rotate
        </motion.div>

        <motion.div className="size-[100px] bg-cyan-500 text-white grid place-items-center"
          animate={{ rotateY: 180 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{ originX: 1 }}
        >
          Rotate
        </motion.div>

        <motion.div className="size-[100px] bg-cyan-500 text-white grid place-items-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "linear" }}
        >
          Scale
        </motion.div>

        <motion.div className="size-[100px] bg-cyan-500 text-white grid place-items-center"
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 60 }}
        >
          X
        </motion.div>

        <motion.div className="size-[100px] bg-cyan-500 text-white grid place-items-center"
          initial={{ x: 0 }}
          animate={{ x: '50vw' }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          X
        </motion.div>

        <motion.div className="size-[100px] bg-cyan-500 text-white grid place-items-center"
          animate={{
            x: [0, 100, 100, 0, 0],
            y: [0, 0, 100, 100, 0]
          }}
          transition={{
            duration: 4,
            times: [0, 0.25, 0.5, 0.75, 1],
            ease: "linear",
            repeat: Infinity
          }}
        >
          M
        </motion.div>

        <motion.div className="size-[100px] bg-cyan-500 text-white grid place-items-center"
          initial={{ '--rotate': '0deg' }}
          animate={{ '--rotate': '360deg' }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <h1 style={{ transform: 'rotate(var(--rotate))' }}>Hello</h1>
        </motion.div>

        <div className="h-[200px] flex items-center gap-4">
          <AnimatePresence initial={false}>
            {isVisible ? (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="size-[100px] bg-cyan-500 text-white grid place-items-center"
                key="box"
              />
            ) : null}
          </AnimatePresence>
          <motion.button
            className="bg-cyan-600 text-white p-2 rounded-md h-10"
            onClick={() => setIsVisible(!isVisible)}
            whileTap={{ y: 1 }}
            layout
          >
            {isVisible ? "Hide" : "Show"}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
export default Basics;