import { useState } from 'react';
import { projectsData } from '../../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web Apps', 'Mobile', 'Design'];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-emerald-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            creating exceptional digital experiences.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-linear-to-r from-blue-600 to-emerald-500 text-white shadow-lg'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900 rounded-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-28 md:h-32 bg-linear-to-br from-blue-600 to-emerald-500 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-5xl md:text-6xl">
                  {project.icon}
                </div>
                
              </div>

              {/* Project Info */}
              <div className="p-10 md:p-12">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-800 text-emerald-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-400 mt-12">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
