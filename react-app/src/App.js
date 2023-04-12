import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import WorkspacesIndex from "./components/Workspaces/WorkspacesIndex";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard/Dashboard"
import HomePage from "./components/HomePage";
import CreateChannel from "./components/Channels/CreateChannel";
import UpdateChannel from "./components/Channels/UpdateChannel";
import LoadingPage from "./components/LoadingPage";
import WorkspaceForm from "./components/Workspaces/WorkspaceForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);
  // steven testing
  // {!window.location.pathname.includes("/channels") ? <Navigation isLoaded={isLoaded} />: <div>yo whatsup</div>}

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/dashboard/:workspaceId/manage">
            <UpdateChannel />
          </Route>
          <Route path="/dashboard/:workspaceId/newchannel">
            <CreateChannel />
          </Route>
          <Route path="/dashboard/:workspaceId">
            <Dashboard />
          </Route>
          <Route path="/create-workspace">
            <WorkspaceForm />
          </Route>
          <Route path="/workspaces">
            <WorkspacesIndex />
          </Route>
          <Route path="/loading">
            <LoadingPage />
          </Route>
          <Route path="/">
            <HomePage />
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
