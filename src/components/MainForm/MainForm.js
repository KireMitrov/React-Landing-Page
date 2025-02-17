import React from "react";
import "./main.css";
import background from "../assets/img/maldives.jpg"
import image from "../assets/img/Image.png";
import decor from "../assets/img/Decore.png"

function Main() {

    return (
        // <div className="main-grid" style={{backgroundImage: `url(${background})`}}>
        //     <div className="header">Win and Travel</div>
        //     <div className="main">
        //         <div className="text-main-grid">
        //             <div> <span className="win">WIN</span> <br></br> A 5 STAR MALDIVES <br/>TRIP FOR 2</div>
        //             <div>TripADeal is giving away a luxury 8 day trip for two people to relax in tropical paradise, The Maldives.</div>
        //         </div>
        //         <div class="form-main-grid">
        //             <form action="">
        //                 <p class="form-main-grid-title">For your chance to win, simply enter your details bellow</p>
        //                 <input type="text" name="name" id="name" placeholder="First Name" required />
        //                 <input type="text" name="surname" id="surname" placeholder="Last Name" required />
        //                 <input type="email" name="email" id="email" placeholder="Email Address" required />
        //                 <input type="text" name="country" id="country" placeholder="Country of residence" required />
        //                 <input type="number" name="age" id="age" placeholder="Age Range" min="10" max="100" />
        //                 <div>
        //                     <input type="radio" name="agree" id="agree" class="radio" required />
        //                     <label>I agree to the <a href="#">Terms & Conditions</a> and to recive the TripADeal newsletter.</label>
        //                 </div>
        //                 <input type="submit" value="Enter to win!" class="form-button"/>
        //             </form>
        //         </div>
        //     </div>
        // </div>
     <div className="main-container">
        <div className="main-description">
            <p className="tagline">Best Destinations around the world</p>
            <p className="main-heading">Travel, enjoy and live a new and full life</p>
            <p className="main-desc">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
            <button className="main-btn"> Find out more </button>
        </div>
        <div className="main-image">
            <img src={image} alt="girl on sutcase" />
        </div>
        <img src={decor} alt="decor" className="decore-img"/>
     </div>
    )
}

export default Main