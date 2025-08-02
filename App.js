import React from "react";
import ReactDOM from "react-dom/client"

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>

    )
}

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <h3>Kalpana Hotel</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search
            </div>
            <div className="res-container">
                <RestaurantCard/>
            </div>
        </div>
    )
}
const AppLayout = () => {
 return(
    <div className="app">
        <Header/>
        <Body/>
    </div>
 )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);