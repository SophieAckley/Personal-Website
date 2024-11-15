import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, image }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex gap-2">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;