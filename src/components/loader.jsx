import React from "react";
import { motion } from "framer-motion";

function LoadingComponent() {
  const scaleVariants = {
    big: { scale: 1.2 },
    small: { scale: 1 },
  };

  return (
    <div className="loader bg-[orange] h-screen text-white flex  items-center justify-center absolute z-50 w-full text-4xl">
      <motion.h1
        initial="small"
        animate="big"
        variants={scaleVariants}
        transition={{
          duration: 0.5,
          yoyo: Infinity,
        }}
        
      >
        THE FEED COUNTRY FARM
      </motion.h1>
    </div>
  );
}

export default LoadingComponent;
