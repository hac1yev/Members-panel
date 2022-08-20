import React from 'react';
import './MembersList.module.css';

const MembersList = (props) => {
    return (
        <>
            <td>{props.id}</td>
            <td>{props.lastName}</td>
            <td>{props.firstName}</td>
            <td>{props.gender}</td>
            <td>{props.age}</td>
            <td>{props.education}</td>
            <td>{props.department}</td>
            <td>{props.university}</td>
        </>
    );
};

export default MembersList;