export default function Contact() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">Have questions or feedback? Reach out using the form below.</p>
      <form className="max-w-md space-y-3">
        <div>
          <label className="block mb-1">Name</label>
          <input type="text" className="w-full border p-2 rounded" placeholder="Your Name" />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input type="email" className="w-full border p-2 rounded" placeholder="Your Email" />
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea className="w-full border p-2 rounded" rows="4" placeholder="Your Message" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
}