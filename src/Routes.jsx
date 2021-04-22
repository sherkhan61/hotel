import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Room";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/rooms/:slug" render={() => <Room />} />
        <Route exact path="/rooms" render={() => <Rooms />} />
        <Route render={() => <Error />} />
      </Switch>
    </>
  );
};
