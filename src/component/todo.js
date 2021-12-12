import React, { Component } from "react";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptions: [],
      description: "",
      id: 0,
      isSubmit: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.setState({
      descriptions: [
        ...this.state.descriptions,
        {
          id: this.state.descriptions.length + 1,
          description: this.state.description,
        },
      ],
      description: "",
    });
    // alert(`Submitting Name ${this.state.descriptions}`);
  };

  handleChange = (e) => {
    this.setState({ description: e.target.value });
  };

  render() {
    console.log(this.state.descriptions);
    return (
      <div style={{ minWidth: 300, margin: 24 }}>
        <div
          style={{ marginTop: 1, display: "flex", justifyContent: "center" }}
        >
          <h2>To Do ({this.state.descriptions.length})</h2>
        </div>
        <br />
        <div
          style={{
            marginLeft: 64,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input
              style={{ background: "green", borderRadius: 8, color: "white" }}
              type="submit"
              value="Add"
            />
          </form>
        </div>
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
        <div>
          <ul>
            {this.state.descriptions.map((item, i) => {
              console.log("test", item.description);

              return (
                <Details
                  detail={item.description}
                  key={i}
                  onDelete={this.onDelete.bind(this)}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
  onDelete(chosendetail) {
    console.log("Chosen:", chosendetail);
    let updateddetailsList = this.state.descriptions.filter((detail, index) => {
      return chosendetail !== detail.description;
    });
    console.log("Chosen2:", updateddetailsList);
    this.setState({
      descriptions: updateddetailsList,
    });
  }
}

class Details extends Component {
  render() {
    console.log("detail:", this.props.detail);
    return (
      <div
        style={{
          marginTop: 10,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <li key={this.props.key}>{this.props.detail}</li>

        <span
          style={{
            background: "red",
            borderRadius: 8,
            color: "white",
            padding: 6,
          }}
          onClick={this.handleDelete.bind(this)}
        >
          Delete
        </span>
      </div>
    );
  }

  handleDelete() {
    this.props.onDelete(this.props.detail);
  }
}
