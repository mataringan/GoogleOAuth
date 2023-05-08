import { useEffect } from "react";
import { gapi } from "gapi-script";
import Login from "./components/login";
import Logout from "./components/logout";

const clientId = process.env.REACT_APP_CLIENT_ID;

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <div className="App">
      <Login />
      <Logout />
    </div>
  );
}

export default App;
