import { toast } from 'react-toastify'
import { createContext, useEffect, useState } from 'react';
import apiHelper from '../apiHelper/apiHelper';

export const TopicContext = createContext({})

const TopicProvider = ({children}) => {
  const [topics, setTopics] = useState  ([]);

  useEffect(() => {
    getAllTopics();
  }, [])

  const getAllTopics = async () => {
    try {
      const response = await apiHelper.get('/topics');
      setTopics(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const createTopic = async (obj) => {
    const response = await apiHelper.post('/topics/topic', obj);
    toast.success('Created Topic')
    getAllTopics();
  }

  const deleteTopic = async (id) => {
    const repsonse = await apiHelper.delete(`/topics/topic/${id}`)
    // could also just filter from the front end
    getAllTopics();
  }

  return (
    <TopicContext.Provider
      value={{
        topics,
        createTopic,
        deleteTopic
      }}
    >
      {children}
    </TopicContext.Provider>
  )
}

export default TopicProvider;