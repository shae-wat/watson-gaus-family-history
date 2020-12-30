import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddAncestorPage from "./pages/AddAncestor";
import GausTreePage from "./pages/GausTree";

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Page = styled.section`
  min-height: 90vh;
  padding: 24px 16px;
  max-width: 900px;
  margin-right: auto;
  margin-left: auto;
`;

function App() {
  return (
    <Router>
      <AppHeader>Gaus Family History</AppHeader>
      <Switch>
        <Route path="/" exact>
          <GausTreePage />
        </Route>
        <Route path="/add" exact>
          <AddAncestorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
