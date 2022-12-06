import React from "react";
import { motion } from "framer-motion";

const MyHero = () => {
  return (
    <>
      <h1 className="text-uppercase">
        <span>Ilkin Zamanlı.</span>Web Developer
      </h1>
      <div className="updown">
        <motion.p
          transition={{ duration: 2,delay:0.1 }}
          initial={{ y: -200 }}
          animate={{
            y: 0,
          }}
        >
          I'm a Azerbaijan based web designer & front‑end developer focused on
          crafting clean & user‑friendly experiences, I am passionate about
          building excellent software that improves the lives of those around
          me.
        </motion.p>
      </div>
    </>
  );
};

export default MyHero;
