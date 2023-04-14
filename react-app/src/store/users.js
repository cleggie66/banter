// constants
const LOAD_USERS = "session/LOAD_USERS";

export const loadUsers = (allUserData) => ({
  type: LOAD_USERS,
  payload: allUserData,
});

export const getAllUsersThunk = () => async (dispatch) => {
  const response = await fetch(`/api/users`);

  if (response.ok) {
    const allUserData = await response.json();
    const normalizedUserData = {};
    allUserData.forEach((e) => {
      normalizedUserData[e.id] = e;
    });
    dispatch(loadUsers(normalizedUserData));
  }
};

// export const refreshUser = (userId) => async (dispatch) => {
//   const response = await fetch(`/api/users/${userId}`);
//   if (response.ok) {
//     const data = await response.json();
//     dispatch(setUser(data));
//     return null;
//   } else if (response.status < 500) {
//     const data = await response.json();
//     if (data.errors) {
//       return data.errors;
//     }
//   } else {
//     return ["An error occurred. Please try again."];
//   }
// };

const initialState = {};

const usersReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_USERS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default usersReducer;
