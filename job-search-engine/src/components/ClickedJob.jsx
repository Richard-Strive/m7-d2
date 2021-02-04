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

  handleDeleteLovedJob: (id) =>
    dispatch({
      type: "REMOVE_FAVORITE",
      payload: id,
    }),

  handleToggleShow: () =>
    dispatch({
      type: "TOGGLE_SHOW",
    }),
});

//

function ClickedJob(props) {
  console.log(props);

  const likedJobId = props.liked.find((id) => id === props.singleJob.id);
  console.log(likedJobId);
  return (
    <div>
      <Card className="card_container">
        {props.singleJob.id === likedJobId ? (
          <FavoriteIcon
            className="the_like_heart"
            onClick={() => props.handleDeleteLovedJob(props.singleJob.id)}
          />
        ) : (
          <FavoriteBorderIcon
            className="the_like_heart"
            onClick={() => props.handleLovedJob(props.singleJob.id)}
          />
        )}
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
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ClickedJob);
