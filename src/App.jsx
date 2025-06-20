import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import TrainingPage from "./Pages/TrainingPage";
import Home from "./Pages/Home";
import ProgressTracker from "./Pages/ProgressTracker";
import Projects from "./Pages/projects.jsx"

const App = () => {
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
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/myprojects" element={<Projects />} />
          <Route path="/training" element={
              <TrainingPage modules={trainingModules} 
                ProgressTracker={ProgressTracker}
              />
            } 
          />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />        
        </Route>
      </Routes>
    </>
  );
};

export default App;