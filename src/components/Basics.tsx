import { motion } from "motion/react";

function Basics() {
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
          style={{ originX: 1}}
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
      </div>
    </section>
  );
}
export default Basics;