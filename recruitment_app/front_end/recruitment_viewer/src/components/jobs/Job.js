import React from 'react';
import '../../css/Jobs/Job.css';
import { UncontrolledCollapse, Button} from 'reactstrap';

const Job = (props) => {
  if (!props.job){
    return null
  }
  const expandDivId = `L` + props.job.dateCreated;
  const hashExpandedDivId = `#` + expandDivId;
  const handleClick = (event) => {
    window.location.replace(props.job.applicationUrl)
  }
  return (

    <div className="job" id={expandDivId}>

      <div className="job-upper">
        <div className="job-upper-left">
          <h5>{props.job.title}</h5>
          <p> {props.job.jobType}</p>
        </div>

        <div className="job-upper-middle">
          <h5> {props.job.companyName} </h5>
          <p> {props.job.location}</p>
        </div>

        <div className="job-upper-right">
          <h5> {props.job.skillLevel}</h5>
          <p> £{props.job.salary}</p>
        </div>

    </div>

    <UncontrolledCollapse toggler={hashExpandedDivId}>

    <div className="job-lower">
      <div className="job-lower-left">
        <p>{props.job.techStack}</p>
        <Button color="primary" target="_blank" onClick={handleClick}>Apply</Button>
        </div>

        <div className="job-lower-right">
        <p>{props.job.yourTeam}</p>
        <p>{props.job.responsibilities}</p>
        <p>{props.job.companyCulture}</p>
        </div>

      </div>

    </UncontrolledCollapse>

  </div>
  )
}

export default Job;
