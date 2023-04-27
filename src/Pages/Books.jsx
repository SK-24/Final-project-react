import React from "react";
import emailjs from '@emailjs/browser';


const Books = () => {
  return (
    <div className="books__body">
        <main id="books_main">
            <section>
                 <div className="books__container">
                    <div className="row">
                        <div className="books__header">
                            <h2 className="section__title books__header--title">Contact</h2>
                        </div>
                    </div>
                </div>
                
            </section>
        </main>
    </div>
  );
};

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs
      .sendForm(
        "service_3vn20t2",
        "service_3vn20t2",
        event.target,
        "74w-fDrutuPUyhCxk"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly on email@email.com"
        );
      });
  }

export default Books;
