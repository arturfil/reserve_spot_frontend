import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import apiHelper from "../apiHelper/apiHelper";

export const MeetingContext = createContext({});

const MeetingProvider = ({children}) => {
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
    // const response = await axios.get(`${apiUrl}/meetings`)
    const response = await apiHelper.get('/meetings')
    setMeetings(response.data);
  }

  const getMeetingById = async (id) => {
    // const response = await axios.get(`${apiUrl}/meetings/meeting/${id}`);
    const response = await apiHelper.get(`/meetings/meeting/${id}`);
    setMeeting(response.data);
  }

  const createMeeting = async (obj) => {
    obj.attendees = '6151e1408bd8b70748f8a2f0';
    // const response = await axios.post(`${apiUrl}/meetings/meeting`, obj);
    const response = await apiHelper.post(`/meetings/meeting`, obj);
    getMeetings();
  }

  const updateMeeting = async (id, obj) => {
    obj.attendees =  ['6151e1408bd8b70748f8a2f0'];
    console.log(obj);
    // const response = await axios.put(`${apiUrl}/meetings/meeting/${id}`, obj);
    const response = await apiHelper.put(`/meetings/meeting/${id}`, obj);
    getMeetings();
  }

  const deleteMeeting = async (id) => {
    // const response = await axios.delete(`${apiUrl}/meetings/meeting/${id}`);
    const response = await apiHelper.delete(`meetings/meeting/${id}`);
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
