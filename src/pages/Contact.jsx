import React, { useState, useRef, useEffect } from 'react';
import './Contact.css';
import contactImage from '../assets/contact.jpg';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/contact', formData);
      if (res.data.success) {
        setFormData({ name: '', email: '', message: '' });
        setShowModal(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (showModal) {
      const modal = new window.bootstrap.Modal(modalRef.current);
      modal.show();
      setTimeout(() => {
        modal.hide();
        setShowModal(false);
      }, 3000);
    }
  }, [showModal]);

  return (
    <>
      {/* Modal */}
      <div className="modal fade" tabIndex="-1" ref={modalRef}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-light border-light rounded-4">
            <div className="modal-body text-center p-4">
              <h5 className="mb-0">Siddharth was notified about you!!</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-body d-flex">
        <div className="contact-form flex-column d-flex justify-content-center align-items-center">
          <h1 className="display-6 fw-bold text-white">Contact Me</h1>
          <p className="text-light mt-2 w-75">
            I'd love to hear from you! Whether it's a project inquiry or just to connect, feel free to reach out.
          </p>

          <form className="mt-2 w-75" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="name" className="form-label text-light">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-2">
              <label htmlFor="email" className="form-label text-light">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-2">
              <label htmlFor="message" className="form-label text-light">Your Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-light">Send Message</button>
          </form>

          <div className="social-icons mt-4">
            <a href="https://www.linkedin.com/in/siddharth-7even/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/7even-7even" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:sidxohal9049@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.instagram.com/_._._7even_._._/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="contact-image">
          <img src={contactImage} alt="Contact" className="img-fluid" />
        </div>
      </div>
    </>
  );
};

export default Contact;
