import { useContext } from "react";
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { TopicContext } from "../context/TopicContext";

const ManageTopicsView = () => {
  const { topics, deleteTopic } = useContext(TopicContext);

  const handleDelete = (id) => {
    deleteTopic(id);
  }

  return (
    <div className="container mt-5">
      <h2>Topics</h2>
      <Link to="/createTopic" className="btn btn-outline-primary my-3">Create Topic</Link>
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
                  <i 
                    onClick={() => handleDelete(topic._id)}
                    style={{color: 'red', cursor: 'pointer'}} 
                    className="bi bi-trash"></i>
                </th>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageTopicsView;
