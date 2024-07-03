/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import Form from 'containers/Form/Loadable';
import Details from 'containers/Details/Loadable';
import EmpEdit from 'containers/EmpEdit/Loadable';
import SignIn from 'containers/SignIn/Loadable';
import Footer from 'components/Footer';
import AuthRoute from '../../helpers/authRoutes';
import PrivateRoute from '../../helpers/privateRoutes';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
 max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
    <Switch>
      <AuthRoute exact path="/sessions" component={SignIn} />

      <Route path="/features" component={FeaturePage} />
     
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/form" component={Form} />
      <Route path="/details" component={Details} />
      <Route path="/empedit" component={EmpEdit} />
      {/* <Route path="" component={NotFoundPage} /> */}




      {/* <Route exact path="/sessions" component={SignIn} />
       <Route path="/loginpage" component={LoginPage} />
      <Route exact path="/" component={HomePage} />
      <Route path="/features" component={FeaturePage} />
     
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/form" component={Form} />
      <Route path="/details" component={Details} />
      <Route path="/empedit" component={EmpEdit} />
      <Route path="/signin" component={SignIn} />
      <Route path="" component={NotFoundPage} /> */}
    </Switch>
     </AppWrapper>
  );
}
