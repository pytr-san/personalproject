import bgImage from '../assets/portfolio-bg.jpg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="relative h-screen w-full overflow-hidden">

      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Portfolio</h1>
        <p className="text-xl md:text-2xl mb-8">Welcome to your Portfolio Dashboard</p>
        <button className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg border border-white/20 transition-all"
         onClick={() => navigate('/myprojects')}
        >
          View My Work
        </button>
      </div>
    </div>
  );
};

export default Home;