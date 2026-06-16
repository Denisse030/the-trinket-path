import { useState } from "react";
import "../App.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "3cc8f003-0562-4d51-9de1-7ebd2416cfa6");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      if (data.success) {
        setResult("Message sent successfully!");
        form.reset();
      } else {
        setResult(
          data.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error(error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-card">
        <h1>Contact Me</h1>
        <div className="contact-divider"></div>
        <p>
          Have a cozy NYC spot I should add to The Trinket Path? Send me your
          favorite cafés, trinket shops, galleries, or hidden gems.
        </p>
        <form onSubmit={onSubmit} className="contact-form">
          <div className="contact-input-row">
            <input type="text" name="name" placeholder="Enter your name:" required/>
            <input type="email" name="email" placeholder="Enter your email:" required/>
          </div>
          <textarea name="message" rows={10} placeholder="Enter your message:" required/>
          <button type="submit">Submit Now</button>
          {result && (
            <p className="contact-result">
              {result}
            </p>
          )}
        </form>
      </section>
    </main>
  );
};

export default Contact;