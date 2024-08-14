import React from "react";
import JobDetailBodyTop from "./JobDetailBodyTop";

const JobDetailBody = ({ detail }) => {
  return (
    <section className="details_body">
      <JobDetailBodyTop detail={detail} />
    </section>
  );
};

export default JobDetailBody;
