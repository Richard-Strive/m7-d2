import React, { useState } from "react";
import "./ClickedJob.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  handleLovedJob: (id) =>
    dispatch({
      type: "ADD_FAVORITE",
      payload: id,
    }),
});

function ClickedJob(props) {
  console.log(props);
  return (
    <div>
      <Card className="card_container">
        <FavoriteBorderIcon className="the_like_heart" />
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
      <Button variant="success" className="fav_button">
        <Link className="link_style" to="/favourites">
          See more
        </Link>
      </Button>
      <Button
        variant="danger"
        className="fav_button"
        onClick={() => props.handleLovedJob(props.singleJob.id)}
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ClickedJob);
