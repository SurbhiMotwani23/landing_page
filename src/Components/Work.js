import React from "react";
import one from "../Assets/one.png";
import two from "../Assets/two.png";
import three from "../Assets/three.png";
import four from "../Assets/four.png";
import fifth from "../Assets/fifth.png";
// import './App.css'
// import 'App.css';


const Work = () => {
    const workInfoData = [
        {
            image: one,
        },
        {
            image: two,
        },
        {
            image: three,
        },
        {
            image: four,
        },
        {
            image: fifth,
        },
    ];
    return (
        <div style={{ textAlign: "center" }}>
            <p>
                <span style={{ color: "yellow" }}>Integrate</span> with your existing tools in a few clicks
            </p>
            {workInfoData.map((data) => (
                <div key={data.image}>
                    <img src={data.image} alt="" />
                </div>
            ))}
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="primary-button">
                    <a href="/work">View all</a>
                </button>
            </div>
        </div>
    );
};
export default Work;
