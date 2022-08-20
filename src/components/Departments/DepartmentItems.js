import React from 'react';
import { AiOutlineAccountBook } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';
import { FaDigitalOcean } from 'react-icons/fa';
import { AiOutlineLogin } from 'react-icons/ai';
import { GiHumanPyramid } from 'react-icons/gi';
import { IoIosConstruct } from 'react-icons/io'; 
import classes from './DepartmentItem.module.css';

const DepartmentItems = (props) => {
  let icon;
  let iconClasses;
  let countClasses;
  if(props.department === 'Mühasibatlıq'){
    icon = <AiOutlineAccountBook />;
    iconClasses='muhasibat';
    countClasses='AF';

  }
  if(props.department === 'IT-WEB'){
    icon = <TbWorld />;
    iconClasses='it-web';
    countClasses='WEB';
  }
  if(props.department === 'IT-RM'){
    icon = <FaDigitalOcean />;
    iconClasses='it-rm';
    countClasses='RM';
  }
  if(props.department === 'Logistika'){
    icon = <AiOutlineLogin />;
    iconClasses='logistika';
    countClasses='LP';
  }
  if(props.department === 'HR'){
    icon = <GiHumanPyramid />;
    iconClasses='human-resourse';
    countClasses='HR';
  }
  if(props.department === 'İnşaat'){
    icon = <IoIosConstruct />;
    iconClasses='insaat';
    countClasses='CE';
  }

  return (
    <div className={classes.departmentItem}>
      <div className={classes['department-icon']}>
        <div className={classes[iconClasses]}>
          <div>{icon}</div>
        </div>
        <span className={classes['span-count']}>
          <p style={{color: '#777', fontStyle: 'italic' }}>İştirakçı:</p>&nbsp;
          <p className={classes[countClasses]}>{props.count}</p>
        </span> 
      </div>
      <div className={classes['department-count']}>
        <span className={classes['department-text']}> 
          <p style={{font: '16px sans-serif'}}>Şöbə:</p>&nbsp;
          <p style={{fontStyle: 'italic', color: '#666'}}>{props.department}</p>
        </span>
      </div>
    </div>
  );
};

export default DepartmentItems;