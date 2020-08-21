import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
<<<<<<< HEAD
import { SubcategoryPage, UserPage, ProductDetailPage } from './pages';
=======
import { MainPage, SubcategoryPage, UserPage, BannerPage } from './pages';
>>>>>>> 024b8ba75d92f687464007fdfa32b6e8dd25e554
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
          <Route exact path="/subcategory" component={SubcategoryPage} />
          <Route exact path="/user/:subPath" component={UserPage} />
          <Route exact path="/detail" component={ProductDetailPage} />
          <Route exact path="/banner" component={BannerPage} />
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
