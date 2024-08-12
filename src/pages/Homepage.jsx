import React from "react";
import JobList from "../components/JobList";
import fetchJobs from "../components/fetchJobs";

const Homepage = () => {
  const { data, loading, error } = fetchJobs("data.json");
  console.log(data)
  return (
    <section className="home">
      {loading && <div>loading...</div>}
      {error && <div>{error.message}</div>}
      <section className="job_list">
        {data &&
          data.map((job) => {
            return <JobList key={job.id} job={job} />;
          })}
      </section>
    </section>
  );
};

export default Homepage;
