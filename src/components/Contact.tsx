import React from "react"

export const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="legend">
        <h2>Message Me Now</h2>
      </div>
      <p>If you have any questions or need to reach me, send a message. I'll respond as soon as possible.</p>
      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
        </div>
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}
