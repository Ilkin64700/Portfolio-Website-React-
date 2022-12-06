import React from "react";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactSidebar/ContactInfo";

const Contactpage = () => {
  return (
    <div>
      <main>
        <section>
          <div className="contact">
            <h1>Contact Us</h1>
          </div>
        </section>
        <section id="contact">
          <div className="container">
            <div className="row">
             <ContactInfo/>
              <div className="col-12 col-lg-8">
                <ContactForm/>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contactpage;
