import "./App.css";
import React, { Component } from "react";
import TodoList from "../src/component/todo";
import OnProgress from "../src/component/onProgress";
// import Done from "../src/component/done";
import Dones from "../src/component/dones";
import DoneForm from "component/DoneForm";

export default class App extends Component {
  render() {
    return (
      <div>
        <div
          style={{ marginTop: 10, display: "flex", justifyContent: "center" }}
        >
          <h2>Progress Bar App</h2>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <TodoList />
          <OnProgress />
          <DoneForm />
        </div>
      </div>
    );
  }
}
