const JobList = ({ job }) => {
  return (
    <section className="job">
      <div style={{ backgroundColor: job.logoBackground }}>
        <img src={job.logo} alt={job.company} />
      </div>
      <div>
        <p>{job.postedAt}</p> - <p>{job.contract}</p>
      </div>
      <h1>{job.position}</h1>
      <p>{job.company}</p>
      <em>{job.location}</em>
    </section>
  );
};

export default JobList;
