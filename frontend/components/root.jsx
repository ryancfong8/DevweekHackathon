import React from "react";
import { Provider } from "react-redux";
import {
  Switch,
  BrowserRouter,
  Route,
  IndexRoute,
  hashHistory
} from "react-router-dom";
import Main from "./main.jsx";
import Construction from "./construction.jsx";
import Default from "./default.jsx";
import Trips from "./trip.jsx";
import Form from "./form.jsx";

// <Route
//   path="/users/sign_in"
//   render={() => {
//     return <h1>Signed Out!</h1>;
//   }}
// />
const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Main path="/en-us">
            <Route exact path="/en-us" component={Default} />
            <Route exact path="/en-us/trip" component={Trips} />
            <Route path="/en-us/under-construction" component={Construction} />
            <Route exact path="/en-us/form" component={Form} />
          </Main>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
