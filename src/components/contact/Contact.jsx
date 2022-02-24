import React, { useRef } from 'react';
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp,BsTelephone} from 'react-icons/bs'
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_0i90qxa","template_z9iemjq", form.current, 'user_fBAr57bt2RDYcPOCAv8yw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>nkoubamarius@gmail.com</h5>
            <a href="mailto:nkoubamarius@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <BsTelephone className="contact__option-icon"/>
            <h4>Phone</h4>
            <h5>(+212) 684 784023</h5>
            {/* <a href="mailto:nkoubamarius@gmail.com">Send a message</a> */}
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>(+212) 684 784023</h5>
            <a href="https://api.whatsapp.com/send?phone=+212684784023" target="_blank" rel="noreferrer">Send a message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name="name" placeholder="Your Full Name" required/>
          <input type='email' name="email" placeholder="Your Email" required/>
          <textarea name="message" placeholder="Your Message" rows="7" required></textarea>
          <button type="submit" class="btn btn-primary">Send a Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact