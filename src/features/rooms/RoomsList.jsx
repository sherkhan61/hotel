import React from "react";
import SingleRoom from "../SingleRoom";

const RoomsList = ({ rooms, setRoom }) => {
    if (rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>unfortunately no rooms matched your search parameters</h3>
            </div>
        );
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms.map(item => {
                    return <SingleRoom key={item.id} room={item} setRoom={setRoom} />;
                })}
            </div>
        </section>
    );
};

export default RoomsList;
