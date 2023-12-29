import "@/styles/contact.css";

export default function Home() {
  return (
    <>
      <div className="contact_wrapper">
        <h2>Contact Us</h2>
        <p className="contact_phrase">
          Our customer service works 24/7, therefore do not hesitate on
          contacting us!
          <br />
          <br />
          Our clients are our number one priority
        </p>
        <div className="contact_line"></div>
        <section className="contact_ways_wrapper">
          <input className="input_field" placeholder="Firstname and Lastname" />
          <input className="input_field" placeholder="Email" />
          <input className="input_field" placeholder="Topic" />
          <input
            className="input_field"
            id="problem_description"
            placeholder="Description"
          />
        </section>
        <button className="contact_submit">Submit</button>
      </div>
    </>
  );
}
