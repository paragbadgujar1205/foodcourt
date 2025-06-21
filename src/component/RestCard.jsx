import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import man from "./images/man.jpg.jpg";
import "../styles/restcard.css";

const RestCard = ({ restaurant }) => {
  const navigate = useNavigate();
  return (
    <>
      <div class="col">
        <div className="card main-card h-100 card-scale" style={{ width: "20rem" }}>
          <img src={restaurant.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{restaurant.name}</h5>
            <p className="card-text">
              {restaurant.location}
              <br />
              {restaurant.cuisine}
            </p>
            <Button
              variant="primary"
              onClick={() => navigate(`/menu/${restaurant._id}`)}
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestCard;
