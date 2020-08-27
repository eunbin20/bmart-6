import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import * as Pages from './pages';
import './styles/reset.scss';
import './styles/reactModal.scss';
import './styles/globalstyle.scss';
import { useAuthContext } from './contexts/user';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Pages.MainPage} />
          <Route exact path="/menu" component={Pages.MenuPage} />
          <Route exact path="/search" component={Pages.SearchPage} />
          <Route exact path="/search/:title" component={Pages.SearchResultPage} />
          <Route exact path="/category/:categoryId" component={Pages.CategoryPage} />
          <Route exact path="/subcategory/:subcategoryId" component={Pages.SubcategoryPage} />
          <Route exact path="/user/join" component={Pages.JoinPage} />
          <Route exact path="/user/login" component={Pages.LoginPage} />
          <Route exact path="/user/logout" component={Pages.LogoutPage} />
          <RequireAuthRoute path="/user/liked" component={Pages.UserLikedPage} />
          <RequireAuthRoute path="/user/order" component={Pages.OrderListPage} />
          <Route exact path="/detail/:productId" component={Pages.ProductDetailPage} />
          <Route exact path="/cart" component={Pages.CartPage} />
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
