import React from 'react'
import Header from '../ui/Header'
import Banner from '../ui/Banner'
import { Link } from "react-router-dom";
import RoomsContainer from '../features/rooms/RoomsContainer';

const Rooms = () => {
  return (
      <>
        <Header hero="roomsHero">
          <Banner title="Our room">
            <Link to="/" className="btn-primary">
              return home
            </Link>
          </Banner>
        </Header>
        <RoomsContainer />
      </>
  )
}

export default Rooms;