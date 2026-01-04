const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 85 },
        
      ],
    },
    {
      category: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'Python', level: 50 },
        
        { name: 'RESTful APIs', level: 92 },
        
      ],
    },
    {
      category: 'Database & Cloud',
      icon: '☁️',
      skills: [
        { name: 'MongoDB', level: 85 },
        
        { name: 'MySQL', level: 80 },
        
      ],
    },
    {
      category: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 92 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 80 },
        
        { name: 'Agile', level: 50 },
        
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical <span className="text-emerald-400">Skills</span>
          </h2>
          <div className="w-24 h-1 from-blue-600 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-slate-900 rounded-xl p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-3xl mr-3">{category.icon}</span>
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium text-sm md:text-base">
                        {skill.name}
                      </span>
                      <span className="text-emerald-400 font-semibold text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5">
                      <div
                        className="bg-linear-to-r from-blue-600 to-emerald-500 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-white mb-6">Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Problem Solving',
              'Team Leadership',
              'Code Review',
              
              'Responsive Design',
              'Performance Optimization',
              'API Design',
              'Version Control',
              'Debugging',
              'Testing',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-900 text-gray-300 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
