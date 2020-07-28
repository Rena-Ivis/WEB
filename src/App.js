import React from 'react';
import Layout from './hoc/Layout/Layout'
import {Route, Switch} from 'react-router-dom'
import Dashboard from './containers/Dashboard/Dashboard'
import Tasks from './containers/Tasks/Tasks'

function App() {
  return (
    <Layout>
      <Switch> 
        <Route exact path='/WEB/' component={Dashboard}/>
        <Route path='/WEB/tasks' component={Tasks}/>
        {/* <Route path='/WEB/email' component={}/>
        <Route path='/WEB/contacts' component={}/>
        <Route path='/WEB/chat' component={}/>
        <Route path='/WEB/deals' component={}/>
        <Route path='/WEB/settings' component={}/> */} 
      </Switch>
    </Layout>
  );
}

export default App;
