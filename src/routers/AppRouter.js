import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';
//COMPONENTS
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import CreateExpense from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFound';

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={CreateExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
