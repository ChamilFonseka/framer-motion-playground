import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function Variants() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [staggerKey, setStaggerKey] = useState(0); // Add a key state for re-triggering animations
  
  // Basic variants example
  const boxVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  // Container with staggered children variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3, // delay before children start
        staggerChildren: 0.1, // reduced stagger time for smoother flow
        ease: "easeInOut",
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        mass: 0.8
      }
    }
  };

  // Accordion variants
  const accordionVariants = {
    open: { 
      height: "auto", 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    closed: { 
      height: 0, 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  // Tab content variants
  const tabContentVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: { 
      x: 10, 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  // Hover and tap variants
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  };
  
  return (
    <section className="p-8">
      <h1 className="text-5xl font-bold my-8 text-amber-500 underline">Variants</h1>
      <div className="flex flex-col gap-8">
        
        {/* Basic variant example */}
        <div className="border border-gray-200 p-6 rounded-md">
          <h2 className="text-xl font-bold mb-4">Basic Variants</h2>
          <motion.div
            className="size-[100px] bg-cyan-500 text-white grid place-items-center"
            variants={boxVariants}
            initial="hidden"
            animate="visible"
          >
            Box
          </motion.div>
        </div>        {/* Staggered children example */}
        <div className="border border-gray-200 p-6 rounded-md">
          <h2 className="text-xl font-bold mb-4">Staggered Children</h2>
          <div className="flex flex-col gap-6">            <motion.div
              className="flex gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={staggerKey} // Use staggerKey to force re-render
            >
              {[1, 2, 3, 4, 5].map((index) => (
                <motion.div
                  key={index}
                  className="size-[60px] bg-cyan-500 text-white grid place-items-center rounded-md shadow-md"
                  variants={itemVariants}
                >
                  {index}
                </motion.div>
              ))}
            </motion.div>
            
            <motion.button
              className="bg-cyan-600 text-white p-2 rounded-md w-32 self-center"
              onClick={() => setStaggerKey(prev => prev + 1)} // Increment the key to force re-render
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reset Animation
            </motion.button>
            
            <p className="text-sm text-gray-500">
              Using spring physics and reduced stagger time for smoother animations. 
              The children now use a spring transition with optimized stiffness and damping values.
            </p>
          </div>
        </div>

        {/* Accordion example */}
        <div className="border border-gray-200 p-6 rounded-md">
          <h2 className="text-xl font-bold mb-4">Accordion with Variants</h2>
          <div>
            <motion.button
              className="bg-cyan-600 text-white p-3 rounded-md w-full text-left"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.98 }}
            >
              {isOpen ? "Close Accordion" : "Open Accordion"}
            </motion.button>
            
            <motion.div
              className="bg-gray-100 overflow-hidden"
              variants={accordionVariants}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
            >
              <div className="p-4">
                <p>This accordion content animates between height: 0 and height: auto.</p>
                <p className="mt-2">Using variants makes it easy to toggle between states.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tabs example */}
        <div className="border border-gray-200 p-6 rounded-md">
          <h2 className="text-xl font-bold mb-4">Tabs with Variants</h2>
          <div>
            <div className="flex gap-2 mb-4">
              {["Tab 1", "Tab 2", "Tab 3"].map((tab, index) => (
                <motion.button
                  key={index}
                  className={`px-4 py-2 rounded-md ${
                    activeTab === index 
                      ? "bg-cyan-600 text-white" 
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab}
                </motion.button>
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="bg-gray-100 p-4 rounded-md min-h-[100px]"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h3 className="font-bold mb-2">Content for Tab {activeTab + 1}</h3>
                <p>This content animates in and out when switching tabs.</p>
                <p className="mt-2 text-sm text-gray-500">
                  The AnimatePresence component enables exit animations.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Hover/tap variants example */}
        <div className="border border-gray-200 p-6 rounded-md">
          <h2 className="text-xl font-bold mb-4">Hover & Tap Variants</h2>
          <motion.button
            className="bg-cyan-600 text-white p-3 px-6 rounded-md"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            Hover & Tap Me
          </motion.button>
          <p className="mt-4 text-sm text-gray-500">
            Using variants with whileHover and whileTap props
          </p>
        </div>
      </div>
    </section>
  );
}

export default Variants;