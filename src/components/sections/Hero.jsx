import { useState, useEffect } from 'react';

const Hero = () => {
  const titles = ['Software Developer', 'Web Developer', 'Full Stack Engineer'];
  const [displayText, setDisplayText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1200;

  useEffect(() => {
    let timeout;
    const currentTitle = titles[titleIndex];
    if (!isDeleting && charIndex <= currentTitle.length) {
      setDisplayText(currentTitle.substring(0, charIndex));
      if (charIndex < currentTitle.length) {
        timeout = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else if (isDeleting && charIndex >= 0) {
      setDisplayText(currentTitle.substring(0, charIndex));
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex(charIndex - 1), deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 500);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden from-slate-900 via-blue-900 to-slate-900 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 bg-linear-to-br pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="w-80 h-80 md:w-100 md:h-140 rounded-full bg-linear-to-br from-blue-600 to-emerald-500 p-2">
              <img
                src="/profile.png"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">

            {/* Greeting */}
            <h2 className="text-xl sm:text-xl text-gray-300 mb-4">
              Hello 👋, I'm <br></br><span className="text-emerald-400 font-semibold text-2xl sm:text-6xl">Minol Udawaththa</span> 
            </h2>

            {/* Typing Effect */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              {displayText}
              <span className="animate-pulse">|</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              I' m an IT Undergraduate passionate about building modern, scalable web applications and softaware solutions with a strong focus on usability, performance, and real-world impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button
            onClick={scrollToPortfolio}
            className="px-8 py-4 bg-linear-to-r from-blue-600 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View My Work
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-transparent border-2 border-emerald-400 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

            {/* Social Links */}
            <div className="mt-12 flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl transition-colors"
                aria-label="GitHub"
              >
                📦
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl transition-colors"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl transition-colors"
                aria-label="Twitter"
              >
                🐦
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToPortfolio}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors group"
          aria-label="Scroll down"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <svg
            className="w-6 h-6 group-hover:text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;

