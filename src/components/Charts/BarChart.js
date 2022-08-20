import React from 'react';
import { Bar } from 'react-chartjs-2'; 
import { Char as CharJS } from 'chart.js/auto';

const BarChart = () => {
  const uniCounts = [0,0,0,0,0,0];
  const getAllLocalStorageData = JSON.parse(window.localStorage.getItem('allData'));

  for(const id in getAllLocalStorageData){
    if(getAllLocalStorageData[id].university === 'DİA'){
      uniCounts[0]++;
    }
    if(getAllLocalStorageData[id].university === 'UNEC'){
      uniCounts[1]++;
    }
    if(getAllLocalStorageData[id].university === 'ADU'){
      uniCounts[2]++;
    }
    if(getAllLocalStorageData[id].university === 'BDU'){
      uniCounts[3]++;
    }
    if(getAllLocalStorageData[id].university === 'ATU'){
      uniCounts[4]++;
    }
    if(getAllLocalStorageData[id].university === 'ADA'){
      uniCounts[5]++;
    }
  }

  const barUserData = {
    labels: ['DİA','UNEC','ADU','BDU','ATU','ADA'],
    datasets: [{
      data: uniCounts,
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)'
    ],
      borderColor: 'black',
      borderWidth: 0.5
    }]
  };

  return (
      <div className='homepage-bar'>
        <p className='bar-title'>Universitetlər üzrə iştirakçı sayı</p>
        <Bar 
          data={barUserData}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
  );
};

export default BarChart