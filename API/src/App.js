import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./page/login";
import BooksManagement from "./page/booksManagement";
import HomePage from "./page/homepage";
import { useEffect, useState } from "react";
import { useAppSelector } from "./container/store";
import { useDispatch } from "react-redux";
import { setAuthData } from "./container/Auth/actions";
import Cookies from "js-cookie"
import Loading from "./components/modal/Loading";

function App() {
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);
  const isLoading = useAppSelector((state) => state.loadingReducer.isLoading);

  const dispatch = useDispatch()

  useEffect(() => {
    const token = Cookies.get("token");
    const username = Cookies.get("username");
    if (token && username) {
      dispatch(setAuthData({ username, token }))
    }
  }, []);
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/sign-in" component={Login} />
          <PrivateRoute
            path="/books-management"
            component={BooksManagement}
            isAuthenticated={isAuth}
          />
          <Route path="/" component={HomePage} exact />
        </Switch>
      </Layout>
      {isLoading && <Loading />}
    </BrowserRouter>
  );
}

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/sign-in", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default App;
