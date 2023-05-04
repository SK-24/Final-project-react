import React from "react";
import emailjs from "emailjs-com";

const Books = () => {
  function sendEmail(event) {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_3vn20t2",
        "service_3vn20t2",
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
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="about__btn--ctc btn-primary">
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;

// "service_3vn20t2",
//         "service_3vn20t2",
//         "74w-fDrutuPUyhCxk"
