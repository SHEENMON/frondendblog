import React from "react";
import task3 from "../images/task3.png";
import task4 from "../images/task4.png";
import task5 from "../images/task5.png";

const services = [
  {
    title: "Speech And Language Pathology",
    description:
      "Speech and language pathology is a field of expertise practiced by speech-language pathologists. It helps with speech and communication disorders.",
    image: task3, // Use imported image
  },
  {
    title: "Psychology And Behavioural Management",
    description:
      "Psychology and behavioral management help individuals improve their mental health and manage emotions effectively.",
    image:task4 , 
  },
  {
    title: "Educational Rehabilitation",
    description:
      "Educational rehabilitation supports students with special needs to develop learning skills and achieve academic success.",
    image: task5,
  },
];

const Service = () => {
  return (
    <div className="container my-5">
      <div className="row g-4"> 
        {services.map((service, index) => (
          <div key={index} className="col-md-4"> 
            <div className="card shadow-lg h-100" style={{borderRadius:"10px"}}> {/* Card with equal height */}
              <img src={service.image} className="card-img-top" alt={service.title} />
              <div className="card-body text-center">
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-muted">{service.description}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn px-3 text-dark" style={{background:"#E9E9E9"}}>More Details</button>
                  <button className="btn  px-3 text-white" style={{background:"#2D9E45"}}>Enquire Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
