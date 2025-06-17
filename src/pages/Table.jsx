import {useState, useEffect}from 'react'
import PeriodicTable from '../components/PeriodicTable';

const Table = () => {

    const [isDesktop, setIsDesktop] = useState(false);
    
      useEffect(() => {
        const checkScreenSize = () => {
          setIsDesktop(window.matchMedia('(min-width: 1024px)').matches);
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
      }, [])
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center px-4 py-12 ${isDesktop ? 'background' : 'mobile-bg'}`} >
        <h1 className='text-7xl custom-font text-white' >Periodic Table</h1>
        <PeriodicTable/>
    </div>
  )
}

export default Table
