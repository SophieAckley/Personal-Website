import React from 'react';

interface SkillBadgeProps {
  title: string;
  skills: string[];
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ title, skills }) => {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillBadge;