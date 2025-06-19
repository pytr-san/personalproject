

import ModuleCard from "./Pages/ModuleCard";
import ProgressTracker from "./Pages/ProgressTracker";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar.jsx"; // Your navbar component

export default function App() {
  const trainingModules = [
    {
      title: "Orientation & Policies",
      topics: ["Company Culture", "Workplace Safety", "HR Policies"],
      duration: "1 Week",
    },
    {
      title: "Job-Specific Skills",
      topics: ["Technical Training", "Software Tools", "Team Collaboration"],
      duration: "2 Weeks",
    },
    {
      title: "Practical Assignments",
      topics: ["Shadowing", "Real Projects", "Case Studies"],
      duration: "3 Weeks",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar /> {/* Replaced my Header with your Navbar */}
      <main className="container mx-auto px-4 py-8 mt-16"> {/* Added mt-16 for navbar spacing */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Training Modules</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingModules.map((module, index) => (
            <ModuleCard key={index} module={module} />
          ))}
        </div>

        <ProgressTracker className="mt-12" />
      </main>
      <Footer />
    </div>
  );
}