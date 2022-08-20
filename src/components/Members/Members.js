import React from 'react';
import classes from './Members.module.css';
import MembersList from './MembersList';

const Members = () => { 
    let getAllLocalStorageData = JSON.parse(window.localStorage.getItem('allData'));
    
    const membersList = getAllLocalStorageData.map((item) => (
        <tr className={classes['members-table-body-row']} key={item.id}>
            <MembersList 
                id={item.id}
                firstName={item.first_name}
                lastName={item.last_name}
                age={item.age}
                university={item.university}
                education={item.education}
                gender={item.gender}
                department={item.department}
            />
        </tr>
    ));

    return (
        <div className={classes.members}>
            <h2 className={classes['members-title']}>İştirakçı siyahısı</h2>
            <table className={classes['members-table']}>
                <thead>
                    <tr className={classes['members-table-header']}>
                        <th>Id</th>
                        <th>Ad</th>
                        <th>Soyad</th>
                        <th>Cins</th>
                        <th>Yaş</th>
                        <th>Təhsil</th>
                        <th>Şöbə</th>
                        <th>Universitet</th>
                    </tr>
                </thead>
                <tbody className={classes['members-table-body']}>
                    {membersList}
                </tbody>
            </table>
        </div>
    )
}

export default Members