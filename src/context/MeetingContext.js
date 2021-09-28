import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const MeetingContext = createContext({});

const MeetingProvider = ({children}) => {
  const apiUrl = process.env.REACT_APP_API_URL
  const [meetings, setMeetings] = useState([]);
  const [meeting, setMeeting] = useState({
    topic: '',
    attendees: '',
    date: '',
    startTime: '',
    duration: ''
  })

  useEffect(() => {
    getMeetings();
  }, [])

  const getMeetings = async () => {
    const response = await axios.get(`${apiUrl}/meetings`);
    setMeetings(response.data);
  }

  const getMeetingById = async (id) => {
    const response = await axios.get(`${apiUrl}/meetings/meeting/${id}`);
    setMeeting(response.data);
  }

  const createMeeting = async (obj) => {
    obj.attendees = '6151e1408bd8b70748f8a2f0';
    // setMeetings([obj, ...meetings]);
    const response = await axios.post(`${apiUrl}/meetings/meeting`, obj);
    getMeetings();
  }

  const updateMeeting = async (id, obj) => {
    obj.attendees =  ['6151e1408bd8b70748f8a2f0'];
    console.log(obj);
    const response = await axios.put(`${apiUrl}/meetings/meeting/${id}`, obj);
    getMeetings();
  }

  const deleteMeeting = async (id) => {
    const response = await axios.delete(`${apiUrl}/meetings/meeting/${id}`);
    getMeetings();
  }

  return (
    <MeetingContext.Provider
      value={{
        meeting,
        meetings,
        setMeetings,
        setMeeting,
        deleteMeeting,
        createMeeting,
        updateMeeting,
        getMeetingById
      }}
    >
      {children}
    </MeetingContext.Provider>
  )
}

export default MeetingProvider
