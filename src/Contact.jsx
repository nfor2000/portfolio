import axios from 'axios';
import React, { useState } from 'react';

const Contact = ({setMessage}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { name, email, subject, message } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendMail = async (e) => {
     e.preventDefault();
   
     console.log(formData);
     try {
       const response = await axios.post("https://portfolio-server-one-sigma.vercel.app/sendMail", formData, {
         headers: {
           "Content-Type": "application/json"
         }
       });
   
       setFormData({
         name: "",
         email: "",
         subject: "",
         message: ""
       });
   
       setMessage(response.data);
     } catch (error) {
       console.error(error);
     }
   };

  return (
    <section className="section contact" id="contact">
      <h2 className="section-title">Contact me</h2>
      <div className="contact-container">
        <form onSubmit={sendMail} className='contact-content' encType='multipart/form-data'>
          <div className="inputs">
            <input
              required
              type="text"
              placeholder='Name'
              name="name"
              value={name}
              onChange={handleChange}
            />
            <input
              required
              type="text"
              placeholder='Email'
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <input
            required
            type="text"
            placeholder='Subject'
            name="subject"
            value={subject}
            onChange={handleChange}
          />
          <textarea
            required
            cols="30"
            rows="10"
            placeholder='Message'
            name="message"
            value={message}
            onChange={handleChange}
          ></textarea>
          <button className='btn'>
            Send message
            <i className="fa fa-chevron-right"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;