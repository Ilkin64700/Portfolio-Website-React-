import React from "react";
import { FiSend } from "react-icons/fi";
import {  motion } from "framer-motion";

const ContactForm = () => {
  return (
    <motion.div
    whileInView={{ opacity: [0, 1] }}
    transition={{ duration: 2, delay: 0.5  }}
    initial={{ x: 200 }}
    animate={{ x: 0 }}
    >
      <form className="contactform">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input type="text" name="name" placeholder="Ad" required />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder="Email Ünvanı"
                required
              />
            </div>
          </div>
          <div className="col-12 col-md-12">
            <div className="form-group">
              <input type="text" name="subject" placeholder="Mövzu" required />
            </div>
          </div>
          <div className="col-12 format">
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Sizin Mesajınız"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="col-12 navdistance">
            <button type="submit" className="button">
              <span className="button-text">Mesaj Göndərin</span>
              <FiSend className="contact-form-icon" />
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
