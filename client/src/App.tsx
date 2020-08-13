import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Category from './pages/Subcategory';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PublicRoute exact path="/" component={Category} />{' '}
        </Switch>
      </Router>
    </div>
  );
}

function PublicRoute({ ...rest }: any): React.ReactElement {
  // const { setLoginCallback } = useContext(AfterLoginAction);

  // useEffect(() => {
  //   setLoginCallback('/');
  // }, [setLoginCallback]);

  return <Route {...rest} />;
}

export default App;
