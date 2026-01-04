const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'BSc (Hons) in Information Technology Specializing in Information Technology ',
      school: 'Sri Lanka Institute of Information Technology (SLIIT)',
      period: '2023 - 2027',
      location: 'Malabe, Sri Lanka',
      achievements: [
        
      ],
    },
    {
      id: 2,
      degree: 'Diploma in English (DIE)',
      school: ' ESoft Metro Campus',
      period: '2023',
      location: 'Embilipitiya, Sri Lanka',
      achievements: [
       
      ],
    },
    {
      id: 3,
      degree: 'GCE Advanced Level (A/L), Technology Stream',
      school: ' R/EMB/Presidents College',
      period: '2021(2022)',
      location: 'Embilipitiya, Sri Lanka',
      achievements: [
       
      ],
    },
    {
      id: 4,
      degree: 'GCE Ordinary Level (O/L) ',
      school: ' R/EMB/Presidents College',
      period: '2018)',
      location: 'Embilipitiya, Sri Lanka',
      achievements: [
       
      ],
    },
  ];

  const certifications = [
    /*{ name: 'AWS Certified Developer', issuer: 'Amazon', year: '2023' },
    { name: 'React Advanced Certification', issuer: 'Meta', year: '2022' },
    { name: 'Node.js Professional', issuer: 'OpenJS Foundation', year: '2021' },*/
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-emerald-400">Education</span> & Certifications
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="text-3xl mr-3">🎓</span> Education
            </h3>
            <div className="grid gap-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-slate-800 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {edu.degree}
                      </h4>
                      <div className="text-emerald-400 font-semibold mb-2">
                        {edu.school}
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm">
                      <div className="flex items-center mb-1">
                        <span className="mr-2">📅</span> {edu.period}
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">📍</span> {edu.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start">
                        <span className="text-emerald-400 mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="text-3xl mr-3">{/* */}</span> {/* */}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-lg p-5 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div className="text-lg font-semibold text-white mb-2">
                    {cert.name}
                  </div>
                  <div className="text-emerald-400 text-sm mb-1">{cert.issuer}</div>
                  <div className="text-gray-400 text-sm">{cert.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
