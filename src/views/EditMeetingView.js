import { useContext, useEffect } from "react";
import { MeetingContext } from "../context/MeetingContext";
import { TopicContext } from "../context/TopicContext";
import { useHistory } from 'react-router-dom';
import axios from "axios";

const EditMeetingView = ({match}) => {
  const history = useHistory()
  const { id } = match.params;
  const { meeting, getMeetingById, setMeeting, updateMeeting, deleteMeeting } = useContext(MeetingContext);
  const { topics } = useContext(TopicContext);

  useEffect(() => {
    getMeetingById(id)
  }, [])

  const handleChange = (event) => {
    setMeeting({
      ...meeting,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      startTime: meeting.startTime,
      date: meeting.date,
      topic: meeting.topic,
      duration: meeting.duration
    }
    updateMeeting(id, data)
  }

  const handleDelete = (event) => {
    event.preventDefault();
    deleteMeeting(id);
    history.push('/')
  }

  return (
    <div className="container mt-5">
      <form className="editForm">
        <h2>Edit Meeting</h2>

        <label>Topics</label>
        <select
          defaultValue={meeting.topic.name}
          onChange={handleChange}
          name="topic"
          className="form-control"
        >
          <option disabled value={meeting.topic.name}>
            Current: {meeting.topic.name}
          </option>
          {topics &&
            topics.map((t) => (
              <option key={t._id} value={t._id}>
                {t.name}
              </option>
            ))}
        </select>
        
        <label>Date </label>
        <input
          name="date"
          value={meeting.date ? new Date(meeting.date).toISOString().split('T')[0] : ""}
          onChange={handleChange}
          placeholder="date"
          type="Date"
          className="form-control"
        />

        <label>Start Time</label>
        <input
          name="startTime"
          value={meeting.startTime}
          onChange={handleChange}
          placeholder="starTime"
          type="text"
          className="form-control"
        />
        <label>Meeting Duration</label>
        <input
          name="duration"
          value={meeting.duration}
          onChange={handleChange}
          placeholder="duration"
          type="Number"
          className="form-control"
        />

        <button 
          onClick={handleSubmit} 
          className="btn btn-primary form-control"
        >
          Update Meeting
        </button>
        <button 
          onClick={handleDelete} 
          className="btn btn-outline-danger form-control"
        >
          Delete Meeting
        </button>
      </form>
    </div>
  );
};

export default EditMeetingView;
