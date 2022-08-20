import React, { useEffect } from 'react';
import classes from './Header.module.css';
import { GiExitDoor, GiFireDash } from 'react-icons/gi';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import Avatar from '../../images/78-785827_user-profile-avatar-login-account-male-user-icon.png';
import { useDispatch } from 'react-redux';
import { loginSliceActions } from '../../store/login-slice';

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();
    const { pathname } = location;

    if(pathname === '/'){
        localStorage.removeItem('logged');
        localStorage.removeItem('newEvent');
    }

    const localStorageItem = localStorage.getItem('logged');

    useEffect(() => {
        if(pathname !== '/' && !localStorageItem){
            history.push('/');
        }
    }, [pathname,history,localStorageItem]);

    const handleLogout = () => {
        history.push('/');
        dispatch(loginSliceActions.logout());
        window.localStorage.removeItem('logged');
        localStorage.removeItem('newEvent');
    };

  return (
    <div className={classes.header}>
        <div className={classes.logo}>
            <GiFireDash style={{ fontSize: '30px' }}/>
            <p className={classes['logo-text']}>VTP22</p>
        </div>
        {localStorageItem && <nav className={classes.navbar}>
            <ul>
                <li>
                    <NavLink activeClassName={classes.active} exact to='/homepage'>Əsas səhifə</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to='/members'>İştirakçılar</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to='/events'>Təqvim</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to='/departments'>Şöbələr</NavLink>
                </li>
            </ul>
        </nav>}
        {localStorageItem && <div className={classes['my-account']}>
            <img src={Avatar} alt='avatar' className={classes.avatar} />
            <span onClick={handleLogout}><GiExitDoor className={classes.setting} />
                <p className={classes['header-exit']}>Çıxış</p>
            </span> 
        </div>}
    </div>
  );
};

export default Header;