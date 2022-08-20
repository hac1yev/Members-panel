import React, { useCallback, useEffect } from 'react';
import { Route,Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './pages/HomePage';
import MembersPage from './pages/MembersPage';
import EventPage from './pages/EventPage';
import DepartmentsPage from './pages/DepartmentsPage';
import LoginPage from './pages/LoginPage';
import { useDispatch } from 'react-redux';
import { loginSliceActions } from './store/login-slice';
import { apiKey, apiUrl } from './components/api/ApiKey';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageItem = localStorage.getItem('logged');
    if(localStorageItem){
      dispatch(loginSliceActions.login());
    }
  }, [dispatch]);


  const getAllMembers = useCallback( async () => {
    const response = await fetch(`${apiUrl}?key=${apiKey}`);

    if(!response.ok){
      throw new Error("Can't fetch data!");
    };

    const data = await response.json();

    window.localStorage.setItem('allData', JSON.stringify(data));
  }, []);

  useEffect(() => {
    getAllMembers();
  }, [getAllMembers]);

  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact component={LoginPage} />
        <Route path='/homepage' exact component={Homepage} />
        <Route path='/members' exact component={MembersPage} />
        <Route path='/events' exact component={EventPage} />
        <Route path='/departments' exact component={DepartmentsPage} />
        
      </Switch>
    </>
  );
};

export default App;