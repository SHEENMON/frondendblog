import React from "react";

const Header = () => {
  return (
    <div className="container text-center my-5">
      
      <h2 className="fw-bold" style={{fontFamily: "'Open Sans', sans-serif",}}>
        Best <span className="text-success fst-italic">Autism</span> Treatment Center in
      
       Kochi | Kerala | India</h2>

     
      <p className="text-muted mt-3 px-3" style={{ maxWidth: "750px", margin: "0 auto",
        fontFamily: "'Open Sans', sans-serif",
       }}>
        With our innovative blend of the goodness of Ayurveda, modern medical research, 
        cutting-edge technology, and proven tools, Jeevaniyam offers the best autism treatment 
        in Kerala, India. Read more to find out how your special child can have a future 
        as bright and fulfilling as any of its peers. And, save yourself countless panic attacks 
        and sleepless nights.
      </p>

      
      <div className="d-flex justify-content-center mt-4 gap-3">
        <button className="btn btn-outline-dark px-4 py-2">Know More</button>
        <button className="btn btn-success px-4 py-2 text-white">Download Brochure</button>
      </div>
    </div>
  );
};

export default Header;
