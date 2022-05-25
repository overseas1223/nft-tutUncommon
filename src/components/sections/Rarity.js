import React from 'react';
import rarity from "../../assets/rarity.jpg";

const Rarity = () => {
    return (
        <div className="section" id="rarity">
            <h1> Rarity </h1>
            <div className="row">
                <div className="col-lg-3 col-md-2"></div>
                <div className="col-lg-6 col-md-8">
                    <img src={rarity} alt="Rarity" width="100%" className="rarity-img" />
                </div>
                <div className="col-lg-3 col-md-2"></div>
            </div>
        </div>
    )
}

export default Rarity;