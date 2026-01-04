const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Senior Full Stack Developer',
      company: 'Tech Company',
      period: '2023 - Present',
      location: 'Remote',
      description: [
        'Led development of scalable web applications using React and Node.js',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews',
      ],
    },
    {
      id: 2,
      position: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2021 - 2023',
      location: 'New York, NY',
      description: [
        'Built responsive web applications for Fortune 500 clients',
        'Optimized application performance improving load times by 40%',
        'Collaborated with designers to implement pixel-perfect UIs',
      ],
    },
    {
      id: 3,
      position: 'Junior Developer',
      company: 'Startup Inc.',
      period: '2020 - 2021',
      location: 'San Francisco, CA',
      description: [
        'Developed and maintained RESTful APIs using Node.js and Express',
        'Created reusable React components for the component library',
        'Participated in agile development processes and daily standups',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Work <span className="text-emerald-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My professional journey and career milestones
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-slate-700"></div>

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto md:text-left'
                } md:w-1/2 pl-8 md:pl-0`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-auto md:right-0 md:-mr-3 w-6 h-6 bg-blue-600 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content Card */}
                <div className="bg-slate-800 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.position}
                    </h3>
                  </div>
                  
                  <div className="text-emerald-400 font-semibold mb-1">
                    {exp.company}
                  </div>
                  
                  <div className="flex flex-wrap gap-3 text-sm text-gray-400 mb-4">
                    <span className="flex items-center">
                      <span className="mr-1">📅</span> {exp.period}
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">📍</span> {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start">
                        <span className="text-emerald-400 mr-2">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
