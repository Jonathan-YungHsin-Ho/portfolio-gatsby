import React, { useState } from "react"
import emailjs from "emailjs-com"
import ModeProvider from "../contexts/ModeContext"
import Layout from "../components/layout"

export default () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [feedback, setFeedback] = useState("")
  const [error, setError] = useState("")

  const handleChange = e =>
    setMessage({ ...message, [e.target.name]: e.target.value })

  const sendFeedback = (
    templateId,
    fromName,
    fromEmail,
    message,
    toEmail,
    user
  ) => {
    emailjs
      .send(
        "default_service",
        templateId,
        { fromName, fromEmail, message, toEmail },
        user
      )
      .then(res => {
        // console.log(res);
        setFeedback("Your message was successfully sent!")
        setMessage({ name: "", email: "", message: "" })
      })
      .catch(err => {
        console.log("Failed to send message. Error: ", err)
        setError("Sorry, message failed to send")
      })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // console.log(message)

    sendFeedback(
      process.env.GATSBY_EMAILJS_TEMPLATEID,
      message.name,
      message.email,
      message.message,
      process.env.GATSBY_EMAILJS_RECEIVER,
      process.env.GATSBY_EMAILJS_USERID
    )
  }

  return (
    <ModeProvider>
      <Layout>
        <div className="panel-centered">
          <section className="contact-page">
            <h2>Get In Touch</h2>
            <p>
              Feel free to reach out if you'd like to discuss collaboration or
              other opportunities.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={message.name}
                onChange={handleChange}
                aria-label="Input name"
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={message.email}
                onChange={handleChange}
                aria-label="Input email"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="9"
                value={message.message}
                onChange={handleChange}
                aria-label="Input message"
              />
              <div className="contact-button-row">
                {message.name !== "" &&
                message.email !== "" &&
                message.message !== "" ? (
                  <button>Send Message</button>
                ) : (
                  <button disabled>Send Message</button>
                )}
                <div className="message-feedback">
                  <span style={{ color: "green" }}>{feedback}</span>
                  <span style={{ color: "red" }}>{error}</span>
                </div>
              </div>
            </form>
          </section>
        </div>
      </Layout>
    </ModeProvider>
  )
}
