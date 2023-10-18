import logo from './logo.svg';
import './App.css';
import CompanyList from './components1/CompanyList';
import Header from './components1/Header';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CreateCompany from './components1/CreateCompany';
import RecruitInfor from './components1/RecruitInfor';
import UseFetch from './components1/UseFetch';
import { useState } from 'react';
import Modify from './components1/Modify';
import Company from './components1/Company';
import EmptyPage from './components1/EmptyPage';
import DeleteCom from './components1/DeleteCom';
function App() {


 
  return (

      <BrowserRouter>
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
          <CompanyList/>
        </Route>
        <Route exact path="/createcompany">
          <CreateCompany/>
        </Route>
        <Route exact path="/companys/:id">
          <RecruitInfor />
        </Route>                
        <Route exact path="/modify/:id">
          <Modify />
        </Route>
        <Route exact path="/deleteCom/:id">
            <DeleteCom />
          </Route>
        <Route>
          <EmptyPage />
        </Route>
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}


export default App;
