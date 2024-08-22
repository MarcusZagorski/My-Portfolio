import "./Contact.css";

const Contact = ({ contactRef }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

    await fetch("http://localhost:3001/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="contact-me">
      <h1 className="contact-title">
        CONT<span>ACT</span>
      </h1>

      <div className="form-container">
        <input
          type="text"
          name="firstName"
          id="fname"
          placeholder="First Name"
          ref={contactRef}
        ></input>

        <input
          type="text"
          name="surname"
          id="surname"
          placeholder="Surname"
        ></input>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        ></input>

        <input
          type="text"
          name="message"
          id="message"
          placeholder="Message"
        ></input>

        <button>SEND</button>
      </div>
    </form>
  );
};

export default Contact;
