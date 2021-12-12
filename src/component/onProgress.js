import React, { useState } from "react";
// import '../assets/css/style.css';

const OnProgress = () => {
  const [descriptions, setDescriptions] = useState([]);
  const [description, setDescription] = useState("");
  const [id, setId] = useState(0);
  const lengthDescriptions = descriptions.length;
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const lengthDesc = descriptions.length + 1;
    //Set Descriptions
    setDescriptions([
      ...descriptions,
      {
        id: lengthDesc,
        description: description,
      },
    ]);
    setDescription("");
    // alert(`Hello`);
  };

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDelete = (item) => {
    // this.props.deleteTodo(id);
    console.log("ID:", item.id);
    const todos = descriptions.filter((desc) => {
      console.log("ToDos:", desc.id);
      // return desc.id !== item.id;
      return item.id !== desc.id;
    });
    // return todos;
    setDescriptions(todos);
  };

  return (
    <div style={{ minWidth: 300, margin: 24 }}>
      <div style={{ marginTop: 1, display: "flex", justifyContent: "center" }}>
        <h2>On Progress ({lengthDescriptions})</h2>
      </div>
      <br />
      <div
        style={{
          marginLeft: 64,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <form onSubmit={handleSubmit}>
          <input type="text" value={description} onChange={handleChange} />
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
          {descriptions.map((item, i) => {
            console.log("test", item.description);

            return (
              <div
                style={{
                  marginTop: 10,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <li key={item.id}>{item.description}</li>

                <span
                  style={{
                    background: "red",
                    borderRadius: 8,
                    color: "white",
                    padding: 6,
                  }}
                  onClick={(id) => handleDelete(item)}
                >
                  Delete
                </span>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default OnProgress;
