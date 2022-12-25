import React from "react";
import { skillContentLeft } from "../AboutListData";
import { motion } from 'framer-motion'

const SkillLeft = () => {
  return (
    <div>
      {skillContentLeft.map((item, index) => (
        <div key={item.name} className="bar">
          <div className="col-5">
            <div className="info">
              <span>{item.name}</span>
            </div>
            <div className="progress-line">
              <motion.span
                whileInView={{
                  width: ["0%", `${item.percentage}%`],
                }}
                className={`${item.skillclass}`}
              ></motion.span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillLeft;
