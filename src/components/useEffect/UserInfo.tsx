import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { TDetails } from "./Details";
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

interface IInfoProps {
  info: TDetails | '';
}

function UserInfo({ info }: IInfoProps) {
  if (!info) return;
  
  return (    
    <Card style={{ width: '18rem', margin: "20px" }}>
      <Card.Img variant="top" src={info.avatar} key={uuidv4()}/>
      <Card.Body>
        <Card.Title>{info.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>City: {info.details.city}</ListGroup.Item>
        <ListGroup.Item>Company: {info.details.company}</ListGroup.Item>
        <ListGroup.Item>Position: {info.details.position}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default UserInfo;