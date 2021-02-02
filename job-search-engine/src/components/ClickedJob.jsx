import React from "react";
import "./ClickedJob.css";
import { Card, Button } from "react-bootstrap";
function ClickedJob(props) {
  console.log(props);
  return (
    <div>
      <Card className="card_container">
        <Card.Img
          className="card_img"
          variant="top"
          src={props.singleJob.company_logo}
        />
        <Card.Body className="the_card_body">
          <Card.Title>{props.singleJob.title}</Card.Title>
          <Card.Text>
            <div
              dangerouslySetInnerHTML={{ __html: props.singleJob.description }}
            ></div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ClickedJob;
