import React from "react";

const App = () => {
  const users = [
    { name: "Test", email: "Test.2@gmail.com", domain: "test.io" },
    { name: "Test2", email: "Test2@gmail.com", domain: "test2.com" },
  ];

  const renderRows = () => {
    return users.map((item, idx) => {
      return (
        <tr>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.domain}</td>
        </tr>
      );
    });
  };

  return (
    <div className="margin">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default App;
