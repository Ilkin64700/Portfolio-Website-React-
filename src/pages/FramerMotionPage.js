import React from "react";
import { motion } from "framer-motion";

const FramerMotionPage = () => {
  return (
    <div>
      <motion.div
        transition={{ duration: 4 }}
        whileInView={{ opacity: [0, 1] }}
        animate={{
          x: 500,
          y: 200,
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      ></motion.div>
    </div>
  );
};

export default FramerMotionPage;
