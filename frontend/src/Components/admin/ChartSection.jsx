import React from 'react';
import BarChart from './BarChart';

const ChartSection = () => {
    return (
        <div className='w-full flex justify-evenly items-center'>
            <BarChart />
            <BarChart />
        </div>
    );
}

export default ChartSection;
