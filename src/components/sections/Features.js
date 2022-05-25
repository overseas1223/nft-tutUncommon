import React from 'react';
import CatPart from "../components/PartComponent";
import cat1 from "../../assets/trait/1.png";
import cat2 from "../../assets/trait/2.png";
import cat3 from "../../assets/trait/3.png";
import cat4 from "../../assets/trait/4.png";
import cat6 from "../../assets/trait/6.png";
import cat7 from "../../assets/trait/7.png";
import cat8 from "../../assets/trait/8.png";
import cat9 from "../../assets/trait/9.png";
import cat10 from "../../assets/2.png";

const cats = [
    { img: cat1, name: "Background", count: 20 },
    { img: cat2, name: "Fur color", count: 20 },
    { img: cat3, name: "Eye", count: 3 },
    { img: cat4, name: "Earing", count: 4 },
    { img: cat6, name: "Scarff", count: 13 },
    { img: cat7, name: "Tail jewelry", count: 15 },
    { img: cat8, name: "Foot jewelry", count: 15 },
    { img: cat9, name: "Pedestal", count: 12 },
    { img: cat10, name: "Mystic Cat", count: 55 }
];

const Features = () => {
    return (
        <div id="features">
            <div className="container">
                <div className="row text-center">
                    <h1 style={{ fontWeight: 'bold' }}>Magical Traits</h1>
                    <h3>116 unique traits</h3>
                </div>
                <br/>
                <div className="row">
                    {cats.map((cat, index) => (
                        <div className="col-lg-4 col-md-6 cat-item" key={index}>
                            <CatPart img={cat.img} name={cat.name} count={cat.count} />
                        </div>
                    ))  
                    }
                </div>
            </div>
        </div>
    )
}
export default Features;