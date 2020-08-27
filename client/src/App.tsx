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
import { useAuthContext } from './contexts/user';

export default function App() {
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
          <RequireAuthRoute path="/user/liked" component={UserLikedPage} />
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

interface RequireAuthRouteProps {
  path: string;
  component: any;
  [index: string]: any;
}

function RequireAuthRoute({ path, component: Component, ...rest }: RequireAuthRouteProps) {
  const userAuthContext = useAuthContext();
  const isAuthenticated = userAuthContext?.state.isAuthorized || false;

  return (
    <Route
      exact
      path={path}
      {...rest}
      render={(props) =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/user/login', state: { from: props.location } }} />
        )
      }
    />
  );
}
