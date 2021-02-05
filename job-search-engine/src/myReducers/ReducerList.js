export default function (state = {}, action) {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        jobs: action.payload,
      };
    case "GET_DATA":
      return {
        ...state,
        jobs: action.payload,
      };
    case "SELECTED_JOB":
      return {
        ...state,
        selectedJob: action.payload,
      };
    default:
      return state;
  }
}
