import React from "react";

const JobDetailHead = ({ detail }) => {
  return (
    <section className="details_head">
      <div style={{ backgroundColor: detail.logoBackground }}>
        <img src={detail.logo} alt={detail.company} />
      </div>
      <div>
        <h1>{detail.company}</h1>
        <p>{detail.website}</p>
      </div>
      <a href={detail.website}>Company Website</a>
    </section>
  );
};

export default JobDetailHead;
