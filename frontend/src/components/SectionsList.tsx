import React from 'react';
import { CheckCircle, Layout } from 'lucide-react';

interface SectionsListProps {
  sections: string[];
  prompt: string;
}

export const SectionsList: React.FC<SectionsListProps> = ({ sections, prompt }) => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-green-100 p-2 rounded-lg">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Website Idea Generated!</h3>
          <p className="text-sm text-gray-600">Based on: "{prompt}"</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-md font-medium text-gray-800 flex items-center space-x-2">
          <Layout className="h-4 w-4" />
          <span>Suggested Sections:</span>
        </h4>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {sections.map((section, index) => (
            <li
              key={index}
              className="bg-white border border-green-200 rounded-lg px-4 py-3 text-center font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {section}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};