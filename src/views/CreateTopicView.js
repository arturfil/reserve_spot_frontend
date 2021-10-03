import { useContext, useState } from "react";
import { TopicContext } from "../context/TopicContext";

const CreateTopicView = () => {
  const [topic, setTopic] = useState('');
  const { createTopic } = useContext(TopicContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const obj = {name: topic}
    createTopic(obj);
    setTopic('');
  }

  return (
    <div className="container mt-5">
      <form className="form"> 
        <h2>Create Topic</h2>
        <input
          value={topic}
          placeholder="Topic Name"
          className="form-control"
          onChange={event => setTopic(event.target.value)}
          type="Topic" 
        />
        <button 
          onClick={handleSubmit}
          className="btn btn-success form-control"
        >
          Create Meeting
        </button>
      </form>
    </div>
  )
}

export default CreateTopicView
