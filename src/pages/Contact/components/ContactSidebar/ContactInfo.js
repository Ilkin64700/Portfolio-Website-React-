import React from "react";
import { stats } from "../ContactListData";
import { motion } from "framer-motion";
import ContactSites from "./ContactSites";

const ContactInfo = () => {
  return (
    <>
      {stats.map((item, index) => (
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 2, delay: 0.5 * index }}
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          className="col-12 col-lg-4"
        >
          <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
            {item.heading}
          </h3>
          <p className="open-sans-font mb-4">{item.description}</p>
          <p className="open-sans-font custom-span-contact position-relative">
            {item.iconsidebar1}
            <span className="d-block">Address Point</span>
            {item.address}
          </p>
          <p className="open-sans-font custom-span-contact position-relative">
            {item.iconsidebar2}
            <span className="d-block">mail me</span>
            <a href="mailto:elekberovulvi520@gmail.com">{item.email}</a>
          </p>
          <p className="open-sans-font custom-span-contact position-relative">
            {item.iconsidebar3}
            <span className="d-block">call me</span>
            <a href="Tel: +994517295859"> {item.phonenumber}</a>
          </p>
          <ContactSites/>
        </motion.div>
      ))}
    </>
  );
};

export default ContactInfo;
