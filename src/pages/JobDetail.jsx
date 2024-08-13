import React, { useEffect, useState } from "react";
import fetchJobs from "../components/fetchJobs";
import JobDetailHead from "../components/JobDetailHead";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const { data, loading, error } = fetchJobs("/data.json");
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    data && setDetail(data.find((item) => item.id == id));
  }, []);

  return (
    <section className="job_detail">
      {loading && <div>Loading...</div>}
      {detail && (
        <section className="details">
          <JobDetailHead detail={detail} />
        </section>
      )}
      {error && <div>{error.message}</div>}
    </section>
  );
};

export default JobDetail;
