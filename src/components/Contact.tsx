import { useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { CSSProperties } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const breakpoint = useMediaQuery();
  const isMobile = breakpoint === "xs" || breakpoint === "sm"; // For small screens < 768px
  const isTablet = breakpoint === "md" || breakpoint === "lg"; // For 768px ≤ width < 1280px

  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;


    emailjs
    .send(serviceId, templateId, formData, publicKey)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ from_name: "", email: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  const contactSectionStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "5rem",
  };

  const titleStyle: CSSProperties = {
    position: "relative",
    fontSize: isTablet ? "2.5rem" : isMobile ? "1.75rem" : "3rem",
    marginTop: "5rem",
    marginBottom: isMobile ? "3rem" : "5rem",
    color: "#fff",
    borderBottom: "solid 4px #22c55e",
  };

  const formStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: isMobile ? "90%" : isTablet ? "70%" : "50%",
    gap: "1.5rem",
    color: "#111827",
  };

  const inputStyle: CSSProperties = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    width: "100%",
  };

  const textAreaStyle: CSSProperties = {
    ...inputStyle,
    height: "150px",
    resize: "none",
  };

  const buttonStyle: CSSProperties = {
    padding: "10px 15px",
    backgroundColor: "#22c55e",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    marginBottom: '2rem'
  };

  return (
    <section id="contact" style={contactSectionStyle}>
      <h2 style={titleStyle}>Contact</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          style={inputStyle}
          value={formData.from_name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          style={inputStyle}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          style={textAreaStyle}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
      {status && <p style={{ color: status.includes("successfully") ? "#22c55e" : "red" }}>{status}</p>}
    </section>
  );
};

export default Contact;
