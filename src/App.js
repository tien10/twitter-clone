import React from "react";
import Sidebar from "./Sidebar";
// import logo from './logo.svg';
import "./App.css";
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  return (
    <div className="app">
      {/* <h1>Hi</h1> */}
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
