import React from "react";
import "./tourDealCard.css";
import { data } from "../assets/fakeData/fakeData"

function TourDealCard () {

    return (
        data.map((tour) => (
            <a href="" className="deal-card">
                <img src={tour.img} alt={tour.destination}></img>
                <div className="deal-card-body">
                    <div className="title-destination">
                        <div className="deal-card-title">{tour.title}</div>
                        <div>{tour.destination}</div>
                    </div>
                    <div className="deal-card-devider"></div>
                    <div>
                        <p className="deal-card-description">{tour.description}</p>
                    </div>
                    <div className="deal-card-devider"></div>
                    <div className="deal-card-footer">
                        <div className="footer-left">
                            <div className="duration">{tour.duration}</div>
                            <div className="dates">{tour.dates}</div>
                        </div>
                        <div className="footer-right">{tour.price}</div>
                    </div>
                </div>
            </a>
        ))
    )
}

export default TourDealCard