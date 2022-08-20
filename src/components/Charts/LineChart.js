import React from 'react';
import { Line } from 'react-chartjs-2'; 
import { Char as CharJS } from 'chart.js/auto';

const LineChart = () => {
  const departmentCounts = [0,0,0,0,0,0];
  const getAllLocalStorageData = JSON.parse(window.localStorage.getItem('allData'));

  for(const id in getAllLocalStorageData){
    if(getAllLocalStorageData[id].department === 'IT-WEB'){
      departmentCounts[0]++;
    }
    if(getAllLocalStorageData[id].department === 'IT-RM'){
      departmentCounts[1]++;
    }
    if(getAllLocalStorageData[id].department === 'HR'){
      departmentCounts[2]++;
    }
    if(getAllLocalStorageData[id].department === 'Logistika'){
      departmentCounts[3]++;
    }
    if(getAllLocalStorageData[id].department === 'Mühasibatlıq'){
      departmentCounts[4]++;
    }
    if(getAllLocalStorageData[id].department === 'İnşaat'){
      departmentCounts[5]++;
    }
  }

  const lineUserData = {
    labels: ['IT-WEB','IT-RM','HR','Logistika','Mühasibatlıq','İnşaat'],
    datasets: [{
      data: departmentCounts,
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)'
    ],
      borderColor: 'black',
      borderWidth: 0.5
    }]
  };

  return (
    <div className='homepage-line'>
      <p className='line-title'>Şöbələr üzrə iştirakçı sayı</p>
      <Line 
        data={lineUserData}
        options={{
          maintainAspectRatio: false,
          animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
          }
        }}
      />
    </div>
  );
};

export default LineChart