import React from "react";

const JobDetailBodyTop = ({ detail }) => {
  return (
    <section className="details_body_top">
      <div>
        <div>
          <p>{detail.postedAt}</p>-<p>{detail.contract}</p>
        </div>
        <strong>{detail.position}</strong>
        <em>{detail.location}</em>
      </div>
      <button>Apply Now</button>
    </section>
  );
};

export default JobDetailBodyTop;
