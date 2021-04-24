import React, { Component } from "react";
import defaultBcg from "../assets/images/defaultBcg.jpeg";

import { RoomContext } from "../lib/context";
import Banner from "../ui/Banner";
import { Link, withRouter } from "react-router-dom";
import StyledHeader from "../ui/StyledHeader";

class Room extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      error: true,
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      setTimeout(() => {
        this.props.history.push("/");
      }, 3000);
      return (
          <div className="error">
            <h3> no such room could be found...</h3>
            <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  this.props.history.push("/");
                }}
            >
              return home
            </button>
          </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;

    return (
        <>
          <StyledHeader img={images[0] || this.state.defaultBcg}>
            <Banner title={`${name} room`}>
              <Link to="/rooms" className="btn-primary">
                back to rooms
              </Link>
            </Banner>
          </StyledHeader>
          <section className="single-room">
            <div className="single-room-images">
              {images.map((item, index) => (
                  <img key={index} src={item} alt={name} />
              ))}
            </div>
            <div className="single-room-info">
              <article className="desc">
                <h3>details</h3>
                <p>{description}</p>
              </article>
              <article className="info">
                <h3>info</h3>
                <h6>price : ${price}</h6>
                <h6>size : {size} SQFT</h6>
                <h6>
                  max capacity :
                  {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                </h6>
                <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                <h6>{breakfast && "free breakfast included"}</h6>
              </article>
            </div>
          </section>
          <section className="room-extras">
            <h6>extras </h6>
            <ul className="extras">
              {extras.map((item, index) => (
                  <li key={index}>- {item}</li>
              ))}
            </ul>
          </section>
        </>
    );
  }
}

export default withRouter(Room);