import { FaPhoneAlt, FaFax, FaRegClock } from "react-icons/fa";

export const Contact = () => (
  <div className="pt-16 min-h-screen bg-neutral-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 mt-8">Contact Us</h1>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
        {/* Left Column: Contact Info */}
        <div className="flex flex-col space-y-10 justify-center">
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
        <div className="relative bottom-0 w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1330%20Post%20Rd%20E,%20Westport,%20CT%2006880+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allowFullScreen={true} 
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
);
