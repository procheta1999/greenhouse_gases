import React from 'react';
import "antd/dist/antd.css";
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/mainpage';
import getParams from './pages/paramlocation';



const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'  render={({ location, history }) => {
            const { query } = getParams(location);
            return <MainPage query={query} history={history} />;
          }} />
        {/* <Route path='/page2' component={Page2} />
        <Route path='/page3' component={Page3} />
        <Route path='/page4' component={Page4} />
        <Route path='/page5' component={Page5} /> */}
      </Switch>
   
</div>
  );
}

export default App;