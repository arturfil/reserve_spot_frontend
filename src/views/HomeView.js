import {useContext} from 'react';
import { MeetingContext } from '../context/MeetingContext';

const HomeView = () => {
  const { meetings } = useContext(MeetingContext);

  return (
    <div className="container mt-5">
    <h2>Home View</h2>
      {meetings && meetings.map(m => (
        <h4 key={m._id}>{m.topic.name}</h4>
      ))}
    </div>
  )
}

export default HomeView;