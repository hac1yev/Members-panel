import React from 'react';
import BarChart from '../components/Charts/BarChart';
import LineChart from '../components/Charts/LineChart';
import PieChart from '../components/Charts/PieChart';
import AllDepartment from '../components/Departments/AllDepartment';

const HomePage = () => {
  const getAllLocalStorage = JSON.parse(window.localStorage.getItem('allData'));
  let allDepartments = [];
  let allDepartmentCount = [];

  for(let i=0; i<getAllLocalStorage.length; i++ ){
    allDepartments.push(getAllLocalStorage[i].department);
  }
  
  let counts = {};
  allDepartments.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  }); 
  
  for(var key in counts){
    allDepartmentCount.push({
      department: key,
      count: counts[key]
    });
  }

  return (
    <div className='homepage'>
      <p className='dashboard'>Dashboard</p>
      <AllDepartment allDepartmentCount={allDepartmentCount} />
      <div className='homepage-bar-line'>
        <BarChart />
        <LineChart />
      </div> 
      <PieChart />      
    </div>
  );
};

export default HomePage;