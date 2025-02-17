import { FaPhoneAlt, FaFax, FaRegClock } from "react-icons/fa";

export const Contact = () => (
  <div className="pt-16 min-h-screen bg-neutral-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Contact Info */}
        <div className="flex flex-col space-y-10">
          {/* Phone Section */}
          <div className="flex items-center space-x-6">
            <div className="w-12 h-12 bg-red-300 flex items-center justify-center rounded-md">
              <FaPhoneAlt className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-gray-100">Phone</h3>
              <p className="text-xl text-gray-400">+1 (203) 255 6115</p>
            </div>
          </div>

          {/* Fax Section */}
          <div className="flex items-center space-x-6">
            <div className="w-12 h-12 bg-red-300 flex items-center justify-center rounded-md">
              <FaFax className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-gray-100">Fax</h3>
              <p className="text-xl text-gray-400">+1 (203) 255 6354</p>
            </div>
          </div>

          {/* Business Hours Section */}
          <div className="flex items-center space-x-6">
            <div className="w-12 h-12 bg-red-300 flex items-center justify-center rounded-md">
              <FaRegClock className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-gray-100">Business Hours</h3>
              <p className="text-xl text-gray-400">Mon - Sun: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Right Column: Google Maps */}
        <div className="relative w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1330%20Post%20Rd%20E,%20Westport,%20CT%2006880+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Contact Form (optional, add your form fields here) */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Send Us a Message</h2>
        <form className="space-y-6">
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-neutral-800 text-white rounded-lg shadow-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-neutral-800 text-white rounded-lg shadow-md"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-4 bg-neutral-800 text-white rounded-lg shadow-md"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 text-white rounded-lg font-semibold text-lg transition-transform transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
);
