import React from "react";
import TourDealCard from "../TourDealCard/TourDealCard";
import "./tourdeals.css"


function TourDeals () {

    return (
        <section>
            <div class="tour-deals-header">
                <h3>OTHER TOUR DEALS</h3>
                <a href="#">VIEW ALL TOUR DEALS</a>
            </div>
            <div class="tour-deals-flex">
               <TourDealCard></TourDealCard>
            </div>
        </section>
    )
}

export default TourDeals