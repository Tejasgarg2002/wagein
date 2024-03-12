import React from "react";
import photo1 from "../img/pic3.png";
import Explore from "./Explore";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="landingpage">
        <div className="heading">
          <h1>
            Wage<span style={{ color: "#094FD9", fontSize: "90px" }}>In</span>
          </h1>
          <div>
            At WageIn, we're committed to fair pay for all. Join us in our
            mission for equitable wages and empowered workers.{" "}
          </div>
          <br />

          <Link to="/previewExplor">
            {" "}
            <button className="btn btn-primary">Explore</button>
          </Link>
        </div>
        <div className="img">
          <img
            src={photo1}
            alt="photo"
            style={{ width: "600px", right: "0px", position: "absolute" }}
          />
        </div>
      </div>
      <div
        className="box"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="con">
          <h1 style={{ fontWeight: "500" }}>Why Us?</h1>
          <h3 style={{ paddingTop: "20px", paddingBottom: "40px" }}>
            "WageIn offers a premier platform for both employers and employees,
            fostering a supportive community and providing top-rated content
            backed by cutting-edge technology. We're dedicated to delivering the
            best resources and tools to empower individuals at every stage of
            their career journey."
          </h3>
          {/* <h5>we are here to provide best content...</h5> */}
        </div>
      </div>
      <Explore />
    </>
  );
}
