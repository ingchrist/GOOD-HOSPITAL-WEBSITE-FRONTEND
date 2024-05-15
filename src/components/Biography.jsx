import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            We are the best in terms of helth fecilities
          </p>
          <p>DATE OF ESTABLISHMENT: 9th July 2021</p>
          <p>we are professionals.</p>
          <p>
            our team is the best
          </p>
          <p>contact us for more!</p>
          <p>Prespiterian paediatric eye hospital is the best!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
