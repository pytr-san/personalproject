import day1Bernie from '../assets/day1bernie.jpg'; // Adjust path as needed

const Projects = () => {

  const handleGoBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/'); // Fallback to home if no history
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">

    <button 
      onClick={handleGoBack}
      className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
    >
      Back
    </button>
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      
      {/* Centered Image Container */}
      <div className="max-w-2xl w-full mb-8">
        <img 
          src={day1Bernie} 
          alt="Day 1 Bernie project" 
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>
      
      {/* Additional content can go here */}
    </div>
  )
}

export default Projects;