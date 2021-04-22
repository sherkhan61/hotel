import React from "react";
import Header from "../ui/Header";
import Banner from "../ui/Banner";
import { Link } from "react-router-dom";
import Services from "../features/home/Services";
import FeaturedRooms from "../features/home/FeaturedRooms";

const Home = () => {
  return (
    <>
      <Header>
        <Banner
          title="Luxurious Rooms"
          subtitle="deluxe rooms starting at 299$"
        >
          <Link to="/rooms/" className="btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Header>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
