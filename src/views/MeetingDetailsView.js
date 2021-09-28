import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { MeetingContext } from "../context/MeetingContext";

const MeetingDetailsView = ({ match }) => {
  const { getMeetingById, meeting } = useContext(MeetingContext);
  const { id } = match.params;

  useEffect(() => {
    getMeetingById(id);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Meeting Details View</h2>

      <table className="detailsTable">
        <thead>
          <tr>
            <th>Topic Name: </th>
            <th>{meeting.topic.name}</th>
          </tr>
          <tr>
            <th>Start Time: </th>
            <th>{meeting.startTime}</th>
          </tr>
          <tr>
            <th>Date: </th>
            <th>{new Date(meeting.date).toLocaleDateString()}</th>
          </tr>
          <tr>
            <th>Duration: </th>
            <th>{meeting.duration}hrs</th>
          </tr>
        </thead>
      </table>

      <h4 className="mt-3">Attendees: </h4>
      {meeting.attendees && meeting.attendees.map((a) => (
          <h6 key={a.uid}>{a.name}</h6>
      ))}
      
      <Link 
        to={`/editMeeting/${id}`}
        className="btn btn-outline-primary mt-3"
      >
        Edit Meeting
      </Link>

    </div>
  );
};

export default MeetingDetailsView;
