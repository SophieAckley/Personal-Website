import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, GraduationCap, ChevronDown } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Software Engineer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Recent graduate passionate about building impactful solutions
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a href="#" className="p-2 hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="p-2 hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="p-2 hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce" size={32} />
      </header>

      {/* Projects Section */}
      <section className="py-20 px-4" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Code2 className="text-blue-400" />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="E-Commerce Platform"
              description="Full-stack e-commerce platform built with React, Node.js, and MongoDB. Implemented user authentication, payment processing, and real-time inventory management."
              tags={['React', 'Node.js', 'MongoDB', 'Stripe']}
              image="https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800"
            />
            <ProjectCard
              title="AI Task Manager"
              description="Smart task management application using OpenAI API for task prioritization and natural language processing."
              tags={['Python', 'FastAPI', 'OpenAI', 'React']}
              image="https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Briefcase className="text-blue-400" />
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <SkillBadge title="Frontend" skills={['React', 'TypeScript', 'Tailwind CSS']} />
            <SkillBadge title="Backend" skills={['Node.js', 'Python', 'Java']} />
            <SkillBadge title="Database" skills={['PostgreSQL', 'MongoDB', 'Redis']} />
            <SkillBadge title="Tools" skills={['Git', 'Docker', 'AWS']} />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <GraduationCap className="text-blue-400" />
            Education
          </h2>
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-400">University Name • 2023</p>
            <ul className="mt-4 text-gray-300 list-disc list-inside">
              <li>GPA: 3.8/4.0</li>
              <li>Relevant Coursework: Data Structures, Algorithms, Software Engineering</li>
              <li>Senior Project: Developed an AI-powered study assistant</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2024 • Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;