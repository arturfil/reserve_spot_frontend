import { createContext, useEffect, useState } from "react";
import apiHelper from "../apiHelper/apiHelper";
import { toast } from "react-toastify";

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
    try {
      const response = await apiHelper.get('/meetings')
      setMeetings(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getMeetingById = async (id) => {
    // const response = await axios.get(`${apiUrl}/meetings/meeting/${id}`);
    const response = await apiHelper.get(`/meetings/meeting/${id}`);
    setMeeting(response.data);
  }

  const createMeeting = async (obj) => {
    // const response = await axios.post(`${apiUrl}/meetings/meeting`, obj);
    try {
      const response = await apiHelper.post(`/meetings/meeting`, obj);
      toast.success("Meeting created");
      getMeetings();
    } catch (error) {
      toast.error(error)
    }
  }

  const updateMeeting = async (id, obj) => {
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
