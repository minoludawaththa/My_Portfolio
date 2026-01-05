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
                  I’m Minol Udawaththa – Software & Web Developer, 
                  and IT Undergraduate, currently pursuing a BSc (Hons) in Information Technology 
                  Specializing in Information Technology at the Sri Lanka Institute of Information Technology (SLIIT).
                </p>
                <p>
                  I am a quick learner with strong creativity, problem-solving, teamwork, and leadership abilities,
                   and I am passionate about advancing my career in software and web development, 
                   exploring emerging technologies such as cloud computing and AI/ML.
                   I am highly interested in exploring and using the latest technologies in software development, 
                   including modern frameworks, tools, and best practices. I enjoy working across different areas such as web development, 
                   backend systems, and emerging technologies, and I constantly try to improve my knowledge by learning new concepts and applying them in practical projects.
                </p>
                <p>
                  My goal is to become a skilled Software Engineer who can design and build efficient, 
                  scalable, and user-friendly applications. I enjoy working on real-world projects 
                  that challenge me and help me grow both technically and professionally.
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
