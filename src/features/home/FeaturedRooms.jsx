import React, { Component } from "react";
import { RoomContext } from "../../lib/context";
import Loading from "../../ui/Loading";
import SingleRoom from "../SingleRoom";
import Title from "../../ui/Title";

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        let { loading, featuredRooms: rooms } = this.context;

        rooms = rooms.map(room => {
            return <SingleRoom key={room.id} room={room} />;
        });
        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
        );
    }
}
