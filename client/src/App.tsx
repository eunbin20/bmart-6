import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/reset.scss';
import './styles/fonts.scss';
import './styles/globalstyle.scss';

import SubcategoryPage from './pages/SubcategoryPage';
import BannerPage from './pages/BannerPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SubcategoryPage} />
          <Route exact path="/banner" component={BannerPage} />
        </Switch>
      </Router>
    </div>
  );
}

// function PublicRoute({ ...rest }: any): React.ReactElement {
//   const { setLoginCallback } = useContext(AfterLoginAction);

//   useEffect(() => {
//     setLoginCallback('/');
//   }, [setLoginCallback]);

//   return <Route {...rest} />;
// }

export default App;
