import {useContext} from 'react';
import MeetingCard from '../components/MeetingCard';
import { MeetingContext } from '../context/MeetingContext';

const HomeView = () => {
  const { meetings } = useContext(MeetingContext);

  return (
    <div className="container mt-5">
    <h2>Home View</h2>
      <div className="row">
        {meetings && meetings.map((m, i) => (
          // <h4 key={m._id}>{m.topic.name}</h4>
          <div key={i} className="col my-4">
            <MeetingCard meeting={m} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeView;