const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-900 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white dark:text-white mb-4">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-emerald-500 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Who I Am</h3>
              <div className="space-y-3 md:space-y-4 text-gray-300 text-sm md:text-base">
                <p>
                  I'm a passionate developer with a keen eye for design and a love
                  for creating seamless digital experiences. With over 5 years of
                  experience, I've worked with startups and established companies
                  to bring their visions to life.
                </p>
                <p>
                  My approach combines technical expertise with creative
                  problem-solving, ensuring that every project not only looks
                  great but also performs flawlessly.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or sharing knowledge with
                  the developer community.
                </p>
              </div>
            </div>

            {/* Resume CTA */}
            <div className="flex justify-center">
              <a
                href="/Minol_Udawaththa_Resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-linear-to-r from-blue-600 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Download Resume
                <span className="ml-2">📄</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
