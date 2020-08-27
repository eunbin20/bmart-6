import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {
  MainPage,
  JoinPage,
  LoginPage,
  MenuPage,
  UserLikedPage,
  SearchPage,
  SearchResultPage,
  CategoryPage,
  SubcategoryPage,
  ProductDetailPage,
  CartPage,
} from './pages';
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
          <Route exact path="/menu" component={MenuPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/search/:title" component={SearchResultPage} />
          <Route exact path="/category/:categoryId" component={CategoryPage} />
          <Route exact path="/subcategory/:subcategoryId" component={SubcategoryPage} />
          <Route exact path="/user/liked" component={UserLikedPage} />
          <Route exact path="/user/join" component={JoinPage} />
          <Route exact path="/user/login" component={LoginPage} />
          <Route exact path="/detail/:productId" component={ProductDetailPage} />
          <Route exact path="/cart" component={CartPage} />
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
