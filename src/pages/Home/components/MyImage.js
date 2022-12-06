import React from "react";
import { motion } from "framer-motion";

const MyImage = () => {
  return (
    <>
      <motion.img
        src="images/CROPPED-IMG-2644.JPG"
        alt=""
        transition={{ duration: 1 }}
        whileInView={{ opacity: [0, 1] }}
        initial={{ x: -200 }}
        animate={{
          x: 0,
        }}
      />
      {/* <motion.div 
       transition={{ duration: 2 }}
       whileInView={{ opacity: [0, 1] }}
       animate={{
         x: 500,
         y: 200,
         scale: [1, 2, 2, 1, 1],
         rotate: [0, 0, 270, 270, 0],
         borderRadius: ["20%", "20%", "50%", "50%", "20%"],
       }}
    style={{width:"3rem", height:"3rem", background:"red"}}>

    </motion.div> */}
    </>
  );
};

export default MyImage;
