import React from "react";
import emailjs from "emailjs-com";
//imports

const Contact = () => {
  function sendEmail(event) {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_3vn20t2",
        "template_3cvm6n8",
        event.target,
        "74w-fDrutuPUyhCxk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  }
  //code to allow user on contact to send emails to my email

  return (
    <div className="contact__body">
      <main id="contact__main">
        <section>
          <div className="contact__container">
            <div className="row">
              <div className="contact__header">
                <h1 className="section__title contact__header--title">
                  Contact Us
                </h1>
              </div>
            </div>
            <div className="row">
              <form className="contact-form" onSubmit={sendEmail}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  {/* name area */}
                  <input
                    type="text"
                    placeholder="Adam Smith"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  {/* email area */}
                  <input
                    type="email"
                    placeholder="youremail@gmail.com"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject:</label>
                  {/* subject area */}
                  <input
                    type="text"
                    placeholder="Topic?"
                    className="form-control"
                    id="subject"
                    name="subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  {/* message for user to send area */}
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="contact__btn--ctc btn-primary">
                  Send
                </button>
                {/* send button */}
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
//allow me to use this file in other files^
