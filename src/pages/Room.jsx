import React, { Component } from "react";
import defaultBcg from "../assets/images/defaultBcg.jpeg";

import { RoomContext } from "../lib/context";
import Banner from "../ui/Banner";
import { Link, withRouter } from "react-router-dom";
import StyledHeader from "../ui/StyledHeader";

import { FaDollarSign } from "react-icons/fa";
import { IoIosResize } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { MdPets } from "react-icons/md";
import { MdFreeBreakfast } from "react-icons/md";


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
                <h6>
                  <i>{<FaDollarSign />}</i>Price: <span>${price}</span>
                </h6>
                <h6>
                  <i>
                    <IoIosResize />
                  </i>
                  Size: <span>{size} SQFT</span>
                </h6>
                <h6>
                  <i>{<IoMdPerson />}</i>
                  Max capacity:{" "}
                  <span>
                  {capacity > 1 ? `${capacity} People` : `${capacity} person`}
                </span>
                </h6>
                <h6>
                  <i>{<MdPets />}</i>
                  <span>{pets ? "pets allowed" : "No pets allowed"}</span>
                </h6>

                {breakfast && <h6><i><MdFreeBreakfast /></i><span>free breakfast included</span></h6>}
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
