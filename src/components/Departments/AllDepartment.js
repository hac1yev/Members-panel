import React from 'react';
import classes from './AllDepartment.module.css';
import DepartmentItems from './DepartmentItems';

const AllDepartment = ({ allDepartmentCount }) => {
    const departmentItems = allDepartmentCount.map((departmentCount,index) => (
        <DepartmentItems 
            key={index}
            department={departmentCount.department}
            count={departmentCount.count}
        />
    ));

    return (
        <div className={classes.department}>
            {departmentItems}
        </div>
    );
};

export default AllDepartment;