import React from "react";

const Dones = ({ todos, deleteTodo }) => {
  if (todos.length === 0) return <p></p>;
  else {
    return (
      <div
        style={{
          marginTop: 0,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ul className="collection">
          {todos.map((todo) => {
            return (
              <li key={todo.id} className="collection-items">
                <div className="todo">
                  {todo.todo}
                  <span
                    style={{
                      background: "red",
                      borderRadius: 8,
                      color: "white",
                      padding: 6,
                      marginLeft: 180,
                    }}
                    onClick={(id) => {
                      deleteTodo(todo.id);
                    }}
                  >
                    Delete
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Dones;

// import React, { Component } from "react";
// // import '../assets/css/style.css';

// export default class Dones extends Component {
//   render() {
//     return (
//       <div style={{ minWidth: 300, margin: 24 }}>
//         <div
//           style={{ marginTop: 1, display: "flex", justifyContent: "center" }}
//         >
//           <h2>Done (0)</h2>
//         </div>
//       </div>
//     );
//   }
// }
