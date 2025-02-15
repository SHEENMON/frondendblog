import React from "react";
import image1 from "../images/task1.png";
import image2 from "../images/tast2.png";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div className="container-fluid py-5 position-relative" style={{ paddingTop: "80px" }}> 
            
            <img
                src={image2}
                className="position-absolute"
                style={{
                    width: "163px",
                    height: "61px",
                    top: "10px",
                    left: "20px",
                    zIndex: "1100", 
                }}
                alt="Logo"
            />

            <div className="row align-items-center">
              
                <div className="col-md-5 d-flex flex-column align-items-center text-center">
                    <h1
                        style={{
                            fontFamily: "'Open Sans', sans-serif",
                            fontWeight: "600",
                            fontSize: "64px",
                            lineHeight: "64px",
                            color: "#000",
                        }}
                    >
                        Empowering <span className="text-success">Growth</span>, One Step at a Time
                    </h1>

                    <p
                        style={{
                            fontFamily: "'Open Sans', sans-serif",
                            fontWeight: "500",
                            fontSize: "18px",
                            lineHeight: "24px",
                            maxWidth: "450px",
                            marginTop: "15px",
                        }}
                    >
                        Compassionate care and tailored therapies for individuals with autism and their families.
                    </p>

                  
                    <div className="d-flex gap-3 mt-3">
                        <button className="btn btn-outline-dark px-4 py-2"
                            style={{
                                width: "130px",
                                height: "39px",
                                borderRadius: "10px",
                                borderWidth: "1px",
                            }}
                        >
                            Learn More
                        </button>

                        <button className="btn btn-success text-white px-4 py-2 d-flex align-items-center gap-2"
                            style={{
                                width: "241px",
                                height: "39px",
                                borderRadius: "10px",
                            }}
                        >
                            Schedule an Appointment
                            
                        </button>
                    </div>

                   
                    <div className="mt-5 d-flex flex-column gap-2">
                        <div className="d-flex gap-2 justify-content-center">
                            {["Child care", "Neuro care", "Family care"].map((care, index) => (
                                <a key={index} className="text-white bg-success d-flex align-items-center justify-content-between px-3"
                                    style={{
                                        width: "140px",
                                        height: "40px",
                                        borderRadius: "50px",
                                        textDecoration: "none",
                                    }}
                                >
                                    {care}
                                    <span className="material-icons">arrow_outward</span>
                                </a>
                            ))}
                        </div>
                        <div className="d-flex gap-2 justify-content-center">
                            {["Mind care", "Ortho care"].map((care, index) => (
                                <a key={index} className="text-white bg-success d-flex align-items-center justify-content-between px-3"
                                    style={{
                                        width: "140px",
                                        height: "40px",
                                        borderRadius: "50px",
                                        textDecoration: "none",
                                    }}
                                >
                                    {care}
                                    <span className="material-icons">arrow_outward</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                
                <div className="col-md-7 d-flex justify-content-center">
                    <Navbar/>
                    <img
                        src={image1}
                        alt="Therapy Session"
                        className="img-fluid rounded-3 shadow-lg"
                        style={{
                            maxWidth: "90%",
                            height: "auto",
                            borderRadius: "20px"
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
