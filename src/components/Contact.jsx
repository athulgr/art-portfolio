// components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 text-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <form
        action="https://formsubmit.co/athulgeorge592@gmail.com"
        method="POST"
        className="max-w-md mx-auto space-y-4"
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
