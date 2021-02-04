export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        liked: [...state.liked, action.payload],
        showA: true,
      };
    case "TOGGLE_SHOW":
      return {
        ...state,
        showA: false,
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        liked: [...state.liked.filter((jobs) => jobs !== action.payload)],
      };
    default:
      return state;
  }
}
