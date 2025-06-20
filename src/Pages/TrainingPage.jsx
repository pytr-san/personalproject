import ModuleCard from "./ModuleCard";
import ProgressTracker from "./ProgressTracker";

const TrainingPage = ({ modules  }) => {
  return (
    <main className="container mx-auto px-4 py-8 mt-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Training Modules</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <ModuleCard key={index} module={module} />
        ))}
      </div>
      <ProgressTracker className="mt-12" />
    </main>
  );
};

export default TrainingPage;