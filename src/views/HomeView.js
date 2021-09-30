import { useContext } from "react";
import MeetingCard from "../components/MeetingCard";
import { AuthContext } from "../context/AuthContext";
import { MeetingContext } from "../context/MeetingContext";

const HomeView = () => {
  const { user } = useContext(AuthContext);
  const { meetings } = useContext(MeetingContext);

  return (
    <div className="container mt-5">
      {meetings.length === 0 ? (
        <h2>No Meetings To Show</h2>
      ) : (
        <h2>Home View </h2>
      )}
      <div className="row">
        {meetings &&
          meetings.map((m, i) => (
            <div key={i} className="col my-4">
              <MeetingCard meeting={m} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeView;
