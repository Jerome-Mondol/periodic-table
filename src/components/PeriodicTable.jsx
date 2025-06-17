    import React from 'react';
    import data from '../data/data.json';

    const PeriodicTable = () => {
    return (
        <div className='grid grid-cols-18 grid-rows-10 gap-1 p-4 z-100'>
        {data.elements.map(elem => (
            <div
            key={elem.name}
            style={{
                gridColumn: elem.xpos,
                gridRow: elem.ypos,
                border: `2px solid #${elem.color || '989'}`,
                color: `#${elem.color || '989'}`,
            }}
            className="w-16 h-16 flex items-center justify-center cursor-pointer hover:scale-1 hover:text-white hover:scale-105 transition-all duration-200 ease-in-out rounded-sm"
            >
            {elem.symbol}
            </div>
        ))}
        </div>
    );
    };

    export default PeriodicTable;
