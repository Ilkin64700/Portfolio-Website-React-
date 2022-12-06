import React from 'react'
import {myList} from './AboutListData'
import { motion } from "framer-motion"

const PersonalInfo = () => {
  return (
    <>
          {myList.map((d, index) => (
                      <motion.li
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ delay: 0.2 * index }}
                      >
                        <span key={d.id} className="title">{d.title} : </span>
                        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                          {d.value}
                        </span>
                      </motion.li>
                    ))}

    </>
  )
}

export default PersonalInfo

