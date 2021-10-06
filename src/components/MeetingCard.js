import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MeetingCard = ({meeting: {topic, date, startTime, user, duration, _id}}) => {
  return (
    <Card style={{ width: "18rem" }} className="home">
      <Card.Body>
        <Card.Title>{topic ? topic.name : "Topic DNE Anymore"}</Card.Title>
        <Card.Text>{new Date(date).toISOString().split('T')[0]}</Card.Text>
        <Card.Text>{startTime}</Card.Text>
        {/* <Card.Text>{attendees ? attendees[0].name : 'No attendees'}</Card.Text> */}
        <Card.Text>{user ? user.name : 'No attendees'}</Card.Text>
        <Card.Text>{duration} hours</Card.Text>
        <Link 
          to={`/meetingDetails/${_id}`}
          className="btn btn-outline-success"
        >
          See Details
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MeetingCard;
