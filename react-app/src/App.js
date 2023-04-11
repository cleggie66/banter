import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import ChannelsIndex from "./components/Channels/ChannelsIndex";
import WorkspacesIndex from "./components/Workspaces/WorkspacesIndex";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/channels">
            <ChannelsIndex />
          </Route>
          <Route path="/workspaces">
            <WorkspacesIndex />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route>
            <p>Page Not Found ¯\_(ツ)_/¯ </p>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
