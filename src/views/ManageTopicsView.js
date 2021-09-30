import { useContext } from "react";
import { Table } from "react-bootstrap";
import { TopicContext } from "../context/TopicContext";

const ManageTopicsView = () => {
  const { topics } = useContext(TopicContext);

  return (
    <div className="container mt-5">
      <h2>Topics</h2>
      <button className="btn btn-outline-primary my-3">Create Topic</button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {topics &&
            topics.map((topic, i) => (
              <tr key={topic._id}>
                <th>{i + 1}</th>
                <th>{topic.name}</th>
                <th>
                  <i style={{color: 'red', cursor: 'pointer'}} className="bi bi-trash"></i>
                </th>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageTopicsView;
