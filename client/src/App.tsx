import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { User, SubCategory } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/user/:subPath" component={User} />
          <Redirect path="*" to="/" />
          {/* <PublicRoute exact path="/" component={Category} />{' '} */}
        </Switch>
      </Router>
    </div>
  );
}

// function PublicRoute({ ...rest }: any): React.ReactElement {
//   // const { setLoginCallback } = useContext(AfterLoginAction);

//   // useEffect(() => {
//   //   setLoginCallback('/');
//   // }, [setLoginCallback]);

//   return <Route {...rest} />;
// }

export default App;
