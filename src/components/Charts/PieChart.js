import React from 'react';
import { Pie, PolarArea } from 'react-chartjs-2'; 
import { Char as CharJS } from 'chart.js/auto';

const PieChart = () => {
  const genderCounts = [0,0];
  const studyCounts = [0,0,0];
  const getAllLocalStorageData = JSON.parse(window.localStorage.getItem('allData'));

  for(const id in getAllLocalStorageData){
    if(getAllLocalStorageData[id].gender === 'Qadın'){
      genderCounts[0]++;
    }
    if(getAllLocalStorageData[id].gender === 'Kişi'){
      genderCounts[1]++;
    }
  }

  const pieUserData = {
    labels: ['Qadın','Kişi'],
    datasets: [{
      label: 'User Data',
      data: genderCounts,
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
    ],
      borderColor: 'black',
      borderWidth: 0.5
    }]
  };

  for(const id in getAllLocalStorageData){
    if(getAllLocalStorageData[id].education === 'Bakalavr'){
      studyCounts[0]++;
    }
    if(getAllLocalStorageData[id].education === 'Magistr'){
      studyCounts[1]++;
    }
    if(getAllLocalStorageData[id].education === 'Aspirantura'){
      studyCounts[2]++;
    }
  }

  const studyUserData = {
    labels: ['Bakalavr','Magistr','Aspirantura'],
    datasets: [{
      label: 'User Data',
      data: studyCounts,
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 206, 86, 0.7)',
    ],
      borderColor: 'black',
      borderWidth: 0.5
    }]
  };

  return (
      <>
        <div className='homepage-pies'>
          <div className='homepage-pie'>
            <p className='pie-title'>Cins</p>
            <div className='homepage-pie-item'>
              <p>Kişi: {genderCounts[1]}</p>
              <p>Qadın: {genderCounts[0]}</p>
            </div>
            <Pie 
              data={pieUserData}
              options={{
                maintainAspectRatio: false,
              }}
            />  
          </div>
          <div className='homepage-pie'>
            <p className='pie-title'>Təhsil Pilləsi</p>
            <div className='homepage-pie-item'>
              <p>Bakalavr: {studyCounts[0]}</p>
              <p>Magistr: {studyCounts[1]}</p>
              <p>Aspirantura: {studyCounts[2]}</p>
            </div>
            <PolarArea
              data={studyUserData}
              options={{
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>   
      </>
  );
};

export default PieChart