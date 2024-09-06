import "./App.css";
// import socketIO from "socket.io-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Join from "./component/Join/Join";

// const ENDPOINT="http://localhost:4500/"
// const socket = socketIO(ENDPOINT,{transports:["websocket"]});

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={Join} />
          <Route path="/chat" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
