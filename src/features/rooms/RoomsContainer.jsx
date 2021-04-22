import React from "react";
import RoomsFiltered from "./RoomsFiltered";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../../lib/context";
import Loading from "../../ui/Loading";

let RoomsContainer = ({ context }) => {
    const { loading, setRoom, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <RoomsFiltered rooms={rooms} />
            <RoomsList rooms={sortedRooms} setRoom={setRoom} />
        </>
    );
};

export default withRoomConsumer(RoomsContainer);