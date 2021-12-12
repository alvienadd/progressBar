import React, { Component } from "react";
import { connect } from "react-redux";
import todos from "reducers/rootReducer";
import { addTodo } from "../actions/todoAction";
import { deleteTodo } from "../actions/todoAction";
import Dones from "./dones";

class DoneForm extends Component {
  state = {
    todo: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
  };
  deleteTodo = (id) => {
    this.props.deleteTodo(id);
  };
  render() {
    return (
      <div style={{ minWidth: 300, margin: 24 }}>
        <div
          style={{
            marginTop: 1,
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <h2>Done ({todos.length})</h2>
        </div>
        <br />

        <form onSubmit={this.handleSubmit}>
          <input type="text" id="todo" onChange={this.handleChange} />
          <button
            className="btn green"
            style={{
              background: "green",
              borderRadius: 8,
              marginLeft: 16,
              color: "white",
            }}
            onClick={this.handleSubmit}
          >
            Add
          </button>
        </form>
        <br />
        <div
          style={{
            marginTop: 1,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3>Description</h3>
          <h3>Action</h3>
        </div>
        <div style={{ marginTop: -10 }}>
          <hr />
        </div>
        <Dones todos={this.props.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    todos: state,
  };
};
export default connect(mapStateToProps, { addTodo, deleteTodo })(DoneForm);
