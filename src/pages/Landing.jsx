// Landing.jsx
import '../index.css';
import Table from '../assets/images/table.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Landing = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.matchMedia('(min-width: 1024px)').matches);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center px-4 py-12 ${isDesktop ? 'background' : 'mobile-bg'}`}>


      <div className="w-full max-w-6xl flex flex-col items-center">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-9xl custom-font font-bold text-white mb-4">
            Atomix
          </h1>
            <span className="text-[#4DA6FF] text-3xl sm:text-4xl md:text-3xl custom-font">interactive periodic experience</span>
          <div className="w-[50vw] h-1 bg-[#4DA6FF] mx-auto my-6"></div>
        </div>

        <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#4DA6FF] mb-4">Start from today!</h2>
            <p className="text-lg text-gray-300 mb-6">
              With our interactive Periodic table you can study any elements easily and efficiently!
            </p>
            <Link to="/table"><button className="px-8 cursor-pointer py-3 bg-gradient-to-r from-[#4DA6FF] to-[#9D6BFF] text-white rounded-lg font-bold hover:opacity-90 transition">
              Get started for free
            </button></Link>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <img 
              src={Table} 
              alt="Interactive Periodic Table" 
              className="max-w-full h-auto max-h-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;