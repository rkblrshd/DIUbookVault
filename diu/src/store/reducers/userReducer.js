const initialState = {
  userDetails: {}
};

const updateUserDetails = (oldDetails, newDetails) => {
  for (const [key, value] of Object.entries(newDetails)) {
    oldDetails[key] = value;
  }
  return oldDetails;
};

export function userInfo(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return { userDetails: action.user };
    case "UPDATE":
      return { userDetails: action.user };
      case "LOGOUT":
      return { userDetails: {} };
    default:
      return state;
  }
}
