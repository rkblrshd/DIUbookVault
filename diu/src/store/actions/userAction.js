export const userActions = {
  login,
  update,
  logout
};

function login(user) {
  return dispatch => {
    dispatch({ type: "LOGIN", user });
  };
}
function update(user) {
  return dispatch => {
    dispatch({ type: "UPDATE", user });
  };
}
function logout(user) {
  return dispatch => {
    dispatch({ type: "LOGOUT" });
  };
}
