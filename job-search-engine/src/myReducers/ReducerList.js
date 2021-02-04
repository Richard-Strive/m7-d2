export default function (state = {}, action) {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        jobs: [action.payload],
      };
    default:
      return state;
  }
}
