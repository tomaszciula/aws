import "./App.css";
import React from "react";
import Amplify from "aws-amplify";
import awsmobile from "./aws-exports";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(awsmobile);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>You are logged in</h2>
        <AmplifySignOut />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
