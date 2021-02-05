import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import "./JobList.css";

const mapStateToProps = (state) => state;

function JobList(props) {
  console.log(props);
  return (
    <div
      className="job_info_container"
      onClick={() => props.selectedJob(props)}
    >
      <div className="text-center">RESULTS FOR {props.location}</div>
      <Row>
        <div className="job_header">
          <img className="company_logo" src={props.company_logo} alt=" " />
          <span className="ml-2">
            <b>{props.company}</b>
          </span>
        </div>
      </Row>
      <div className="job_infos">
        <b className="ml-3">{props.title}</b>
        <p className="ml-3">
          <div dangerouslySetInnerHTML={{ __html: props.description }}></div>
        </p>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(JobList);
