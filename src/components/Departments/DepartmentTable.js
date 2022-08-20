import React from 'react';
import classes from './DepartmentTable.module.css';

const DepartmentTable = () => {
    let getAllLocalStorageData = JSON.parse(window.localStorage.getItem('allData'));
    let allDepartments = [];
    let allDepartmentCount = [];

    for(let i=0; i<getAllLocalStorageData.length; i++ ){
        allDepartments.push(getAllLocalStorageData[i].department);
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
    };

    const departmentList = allDepartmentCount.map((departmentItem,index) => (
        <tbody className={classes['department-table-body']} key={index}>
            <tr>
                <td>{index + 1}</td>
                <td>{departmentItem.department}</td>
                <td>{departmentItem.count}</td>
            </tr>
        </tbody>
    ));

    return (
        <div className={classes.departmentTable}>
            <h2 style={{ marginBottom: '20px', color: '#026f42' }}>Şöbə siyahısı</h2>
            <table className={classes['department-table']}>
                <thead>
                    <tr className={classes['department-table-header']}>
                        <td>Sıra</td>
                        <td>Şöbə adı</td>
                        <td>İştirakçı sayı</td>
                    </tr>
                </thead>    
                {departmentList}
            </table>    
        </div>
    );
};

export default DepartmentTable;