import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import apiHelper from '../apiHelper/apiHelper';

export const TopicContext = createContext({})

const TopicProvider = ({children}) => {
  const [topics, setTopics] = useState  ([]);

  useEffect(() => {
    getAllTopics();
  }, [])

  const getAllTopics = async () => {
    const response = await apiHelper.get('/topics');
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