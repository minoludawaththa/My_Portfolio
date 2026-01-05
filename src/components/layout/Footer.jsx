import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
  {
    label: "GitHub",
    icon: <FiGithub className="text-xl text-blue-400" />,
    href: "https://github.com/minoludawaththa",
  },
  {
    label: "LinkedIn",
    icon: <FiLinkedin className="text-xl text-blue-400" />,
    href: "https://linkedin.com/in/minoludawaththa",
  },
  {
    label: "Twitter",
    icon: <FiTwitter className="text-xl text-blue-400" />,
    href: "https://twitter.com/yourusername",
  },
  {
    label: "Email",
    icon: <FiMail className="text-xl text-blue-400" />,
    href: "mailto:udawaththaminol@gmail.com",
  },
];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent mb-4">
              Minol Udawaththa
            </h3>
            <p className="text-gray-400 text-sm">
              Creating beautiful and functional digital experiences
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex flex-col space-y-6">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition">
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-end items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Minol Udawaththa. All rights reserved.
          </p>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
