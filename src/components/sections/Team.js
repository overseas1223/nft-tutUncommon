import React from 'react';
import cat3 from "../../assets/3.png";
import cat2 from "../../assets/1.jpg";
import cat1 from "../../assets/2.png";
import CatPart from "../components/PersonComponent";
const cats = [
    { img: cat1, name: "Allison partner" },
    { img: cat2, name: "Allison" },
    { img: cat3, name: "Allison Parents" },
    // { img: cat4, name: "Allison daughters" }
];
const Team = () => {
    return (
        <div className='container' id="team">
            <div className="row text-center" style={{ padding: '50px' }}>
                <h2 style={{ fontWeight: 'bold' }}>Our Team</h2>
                <h4> We are a family of 4 </h4>
                <h6 className="centerText"> Tut Uncommon – The King of NFTs was imagined, created, and developed by an all-woman team. We are mothers, daughters, aunts, sisters, and wives.</h6>
                <h6 className="centerText">We combined our love of cats and Egyptian history and mythology
                    to create the mystery, the awe, the wonder that is Tut Uncommon!</h6>
            </div>
        </div>
    )
}
export default Team;