import { useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { MeetingContext } from "../context/MeetingContext";
import { TopicContext } from "../context/TopicContext";
import { AuthContext } from "../context/AuthContext";

const EditMeetingView = ({match}) => {
  const history = useHistory()
  const { id } = match.params;
  const { meeting, getMeetingById, setMeeting, updateMeeting, deleteMeeting } = useContext(MeetingContext);
  const { topics } = useContext(TopicContext);
  const { users } = useContext(AuthContext);

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
    updateMeeting(id, data);
    toast.success("Updated Succesfully");
  }

  const handleDelete = (event) => {
    event.preventDefault();
    deleteMeeting(id);
    history.push('/home')
  }

  return (
    <div className="container mt-5">
      <ToastContainer />
      <form className="editForm">
        <h2>Edit Meeting</h2>

        <label>Attendees</label>
        <select name="attendees" className="form-control">
          <option value="" disabled>Select Attendees</option>
          { meeting.attendees && meeting.attendees.map(a => (
            <option key={a.uid} value={a.uid}>{a.name}</option>
            ))}
        </select>

        <label>Topics</label>
        <select
          defaultValue={meeting.topic?.name}
          onChange={handleChange}
          name="topic"
          className="form-control"
        >
          <option disabled value={meeting.topic?.name}>
            Current: {meeting.topic ? meeting.topic.name : 'DNE'}
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
