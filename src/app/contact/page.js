export default function Page() {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold text-teal-400 mb-6 text-center">Contact Me</h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-gray-800 text-gray-400 border border-gray-700 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-gray-800 text-gray-400 border border-gray-700 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 bg-gray-800 text-gray-400 border border-gray-700 rounded"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-teal-400 text-gray-900 font-medium rounded hover:bg-teal-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
