import React from 'react';
import Layout from './hoc/Layout/Layout'
import {Route, Switch} from 'react-router-dom'
import Dashboard from './containers/Dashboard/Dashboard'
import Tasks from './containers/Tasks/Tasks'

function App() {
  return (
    <Layout>
      <Switch> 
        <Route path='/tasks' component={Tasks}/>
        {/* <Route path='/email' component={}/>
        <Route path='/contacts' component={}/>
        <Route path='/chat' component={}/>
        <Route path='/deals' component={}/>
        <Route path='/settings' component={}/> */}
        <Route path='/' component={Dashboard}/>
      </Switch>
    </Layout>
  );
}

export default App;
