import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { MainPage, SubcategoryPage, UserPage, ProductDetailPage } from './pages';
import './styles/reset.scss';
import './styles/fonts.scss';
import './styles/reactModal.scss';
import './styles/globalstyle.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/subcategory/:subcategoryId" component={SubcategoryPage} />
          <Route exact path="/user/:subPath" component={UserPage} />
          <Route exact path="/detail/:productId" component={ProductDetailPage} />
          <Redirect path="*" to="/" />
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
