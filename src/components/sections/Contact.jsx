import { useForm, ValidationError } from '@formspree/react';
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";


const Contact = () => {
  const [state, handleSubmit] = useForm("mrebrpde");

  const socialLinks = [
    
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Let's create something amazing together!
              </h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <FiMail className="text-2xl text-blue-400 " />
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:udawaththaminol@gmail.com"
                    className="text-emerald-400 hover:text-emerald-300"
                  >
                    udawaththaminol@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <FiMapPin className="text-2xl text-blue-400 " />
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-gray-400">EMBILIPITIYA, SRI LANKA</p>
                </div>
              </div>

            <div className="flex items-start gap-6">
                <FiPhone className="text-2xl text-blue-400 " />
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone Number</h4>
                  <a href="tel:+94779279114" className="text-gray-400">077 9279 114</a>
                </div>
              </div>
            </div>
            
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-medium mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 md:py-3 bg-slate-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm md:text-base"
                  placeholder="Your name"
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-medium mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 md:py-3 bg-slate-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm md:text-base"
                  placeholder="your@gmail.com"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-2.5 md:py-3 bg-slate-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none text-sm md:text-base"
                  placeholder="Tell me about your project..."
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full px-8 py-4 bg-linear-to-r from-blue-600 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {state.succeeded && (
                <div className="text-center text-green-400">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {state.errors && state.errors.length > 0 && (
                <div className="text-center text-red-400">
                  ❌ Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;