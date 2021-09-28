import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const MeetingContext = createContext({});

const MeetingProvider = ({children}) => {
  const apiUrl = process.env.REACT_APP_API_URL
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    getMeetings();
  }, [])

  const getMeetings = async () => {
    const response = await axios.get(`${apiUrl}/meetings`);
    setMeetings(response.data);
  }

  const createMeeting = async (obj) => {
    obj.attendees = '6151e1408bd8b70748f8a2f0';
    setMeetings([obj, ...meetings]);
    const response = await axios.post(`${apiUrl}/meetings/meeting`, obj);
  }

  return (
    <MeetingContext.Provider
      value={{
        meetings,
        setMeetings,
        createMeeting,
      }}
    >
      {children}
    </MeetingContext.Provider>
  )
}

export default MeetingProvider
