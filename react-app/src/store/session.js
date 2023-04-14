// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const UPDATE_USER = "session/UPDATE_USER";
const DELETE_USER = "session/DELETE_USER";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

const updateUser = (updatedUserData) => ({
  type: UPDATE_USER,
  payload: updatedUserData,
});

const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId,
});

export const authenticate = () => async (dispatch) => {
  const response = await fetch("/api/auth/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
};

export const login = (email, password) => async (dispatch) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const logout = () => async (dispatch) => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};

export const signUp = (username, email, password) => async (dispatch) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const refreshUser = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}`);
  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const updateUserThunk = (newUserData, userId) => async (dispatch) => {
  try {
    const response = await fetch(`/api/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUserData),
    });
    const data = await response.json();
    const normalizedUserData = {};
    normalizedUserData[data.id] = data;
    dispatch(updateUser(normalizedUserData));
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserThunk = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteUser(userId));
  }
};

const initialState = { user: null };

export default function reducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case SET_USER:
      return { user: action.payload };
    case REMOVE_USER:
      return { user: null };
    case UPDATE_USER:
      return { ...state, ...action.payload };
    case DELETE_USER:
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}
