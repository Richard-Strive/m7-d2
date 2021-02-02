import React, { useState } from "react";
import { Row, Card, Container, Spinner } from "react-bootstrap";
import "./JobList.css";

function JobList({
  company,
  company_logo,
  description,
  title,
  location,
  id,
  selectedJob,
}) {
  console.log(id);
  return (
    <div className="job_info_container" onClick={() => selectedJob(id)}>
      <div className="text-center">RESULTS FOR {location}</div>
      <Row>
        <div className="job_header">
          <img className="company_logo" src={company_logo} alt=" " />
          <span className="ml-2">
            <b>{company}</b>
          </span>
        </div>
      </Row>
      <div className="job_infos">
        <b className="ml-3">{title}</b>
        <p className="ml-3">
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </p>
      </div>
    </div>
  );
}

export default JobList;
