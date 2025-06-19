import { useState } from "react";

export default function ModuleCard({ module }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div 
        className="p-6 cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl font-semibold text-blue-600">{module.title}</h3>
        <p className="text-gray-500 mt-2">Duration: {module.duration}</p>
      </div>
      {isExpanded && (
        <div className="px-6 pb-6">
          <ul className="list-disc pl-5 space-y-2">
            {module.topics.map((topic, i) => (
              <li key={i} className="text-gray-700">{topic}</li>
            ))}
          </ul>
          <button className="mt-4 px-4 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200">
            Start Module
          </button>
        </div>
      )}
    </div>
  );
}