import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiCheck } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import styles from "./Contact.module.css";
import { portfolioData } from "../data/portfolio";

export default function Contact() {
  const { contact, social } = portfolioData;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
        `Message from ${formData.name}`
      )}&body=${encodeURIComponent(formData.message)}`;
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setSubmitted(false);
      }, 2000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.header}>
        <p>Connect</p>
        <h2>Let’s build something together</h2>
      </div>

      <div className={styles.grid}>
        <motion.div
          className={styles.infoCard}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3>Contact Details</h3>
          <div className={styles.contactItem}>
            <span>Email</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div className={styles.contactItem}>
            <span>Phone</span>
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          </div>
          <div className={styles.contactItem}>
            <span>Location</span>
            <p>{contact.location}</p>
          </div>

          <div className={styles.socialLinks}>
            <a 
              href={social.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              title="GitHub"
            >
              <FiGithub />
            </a>
            <a 
              href={social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a 
              href={social.leetcode} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LeetCode"
              title="LeetCode"
            >
              <SiLeetcode />
            </a>
          </div>
        </motion.div>

        <motion.form
          className={styles.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {submitted && (
            <motion.div
              className={styles.successMessage}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiCheck size={20} />
              Message sent successfully!
            </motion.div>
          )}

          <label className={errors.name ? styles.hasError : ""}>
            Name
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={(e) => {
                if (!e.target.value.trim()) setErrors((prev) => ({ ...prev, name: "Name is required" }));
              }}
              placeholder="Your full name"
              aria-label="Full name"
              autoComplete="name"
            />
            {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
          </label>

          <label className={errors.email ? styles.hasError : ""}>
            Email
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={(e) => {
                if (!e.target.value.trim()) setErrors((prev) => ({ ...prev, email: "Email is required" }));
                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value))
                  setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
              }}
              placeholder="your.email@example.com"
              aria-label="Email address"
              autoComplete="email"
            />
            {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
          </label>

          <label className={errors.message ? styles.hasError : ""}>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={(e) => {
                if (!e.target.value.trim()) setErrors((prev) => ({ ...prev, message: "Message is required" }));
                else if (e.target.value.trim().length < 10)
                  setErrors((prev) => ({ ...prev, message: "Message must be at least 10 characters" }));
              }}
              placeholder="Tell me about your project or opportunity..."
              rows="5"
              aria-label="Message"
              autoComplete="off"
            />
            <span className={styles.charCount}>{formData.message.length}/500</span>
            {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
          </label>

          <motion.button
            type="submit"
            className={styles.btn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={submitted}
          >
            {submitted ? "Message Sent!" : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
