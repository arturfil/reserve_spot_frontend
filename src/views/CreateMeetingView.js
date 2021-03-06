import { useContext, useState } from "react";
import { MeetingContext } from "../context/MeetingContext";
import { TopicContext } from "../context/TopicContext";
import { AuthContext } from '../context/AuthContext';

const CreateMeetingView = () => {
  const { topics } = useContext(TopicContext)
  const { createMeeting, setMeetings, meetings } = useContext(MeetingContext);
  const { user } = useContext(AuthContext)
  const [meeting, setMeeting] = useState({
    topic: '',
    date: '',
    startTime: '',
    user: user.uid,
    duration: ''
  })

  const handleChange = (event) => {
    setMeeting({
      ...meeting,
      [event.target.name]: event.target.value
    })
    console.log("attendees", meeting.attendees)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createMeeting(meeting);
    setMeeting({
      topic: '',
      date: '',
      startTime: '',
      attendees: '',
      duration: ''
    })
  }

  return (
    <div className="container mt-5">

      <form className="form">

        <h2>Create Meeting</h2>

        <select defaultValue={'none'} onChange={handleChange} name="topic" className="form-control mb-4">
         
          <option disabled value={'none'}>Select Topic</option>
          {topics && topics.map(t => (
            <option key={t._id} value={t._id}>{t.name}</option>
          ))}
        
        </select>

        {/* <select defaultValue={'none'} onChange={handleChange} name="attendees" className="form-control">
            <option value={'none'} disabled>Select User</option>
            {users.map(user => (
              <option key={user.uid} value={user.uid}>{user.name}</option>
            ))}
        </select> */}

        <input
          name="date"
          value={meeting.date}
          onChange={handleChange} 
          placeholder="date" 
          type="Date" 
          className="form-control" 
        />

        <input 
          name="startTime"
          value={meeting.startTime}
          onChange={handleChange}
          placeholder="starTime" 
          type="time" 
          className="form-control" 
        />

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
          className="btn btn-primary form-control">Create Meeting</button>
      </form>
    </div>
  );
};

export default CreateMeetingView;

