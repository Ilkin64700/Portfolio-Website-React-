import React from "react";
import { statistic } from "./AboutListData";
import { motion } from "framer-motion";
import { AiOutlinePlus } from 'react-icons/ai'


const Records = () => {
  return (
    <>
      {statistic.map((item, index) => (
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ delay: 0.2 * index }}
          className="col-6"
        >
          <div key={index} className="box-stats with-margin">
            <h3 className="poppins-font position-relative">
              {item.number}
              <AiOutlinePlus className="about-records-icon" />
            </h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              <i className="fa-sharp fa-solid fa-minus" />
              {item.ptagVal}
              <span className="d-block">{item.spanTagVal}</span>
            </p>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Records;
