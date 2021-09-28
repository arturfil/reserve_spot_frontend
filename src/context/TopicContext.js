import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const TopicContext = createContext({})

const TopicProvider = ({children}) => {
  const [topics, setTopics] = useState  ([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getAllTopics();
  }, [])

  const getAllTopics = async () => {
    const response = await axios.get(`${apiUrl}/topics`);
    setTopics(response.data);
  }

  return (
    <TopicContext.Provider
      value={{
        topics
      }}
    >
      {children}
    </TopicContext.Provider>
  )
}

export default TopicProvider;