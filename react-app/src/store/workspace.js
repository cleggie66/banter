import { clearActiveChannel } from "./activeChannel";

const normalizer = (data) => {
  const obj = {};
  data.forEach((item) => {
    obj[item.id] = item;
  });
  return obj;
};

const LOAD_WORKSPACES = "workspaces/LOAD_WORKSPACES";
const CREATE_WORKSPACE = "workspaces/CREATE_WORKSPACE";
const UPDATE_WORKSPACE = "workspaces/UPDATE_WORKSPACE";
const DELETE_WORKSPACE = "workspaces/DELETE_WORKSPACE";

const loadWorkspaces = (allWorkspaceData) => ({
  type: LOAD_WORKSPACES,
  payload: allWorkspaceData,
});

const createWorkspace = (newWorkspaceData) => ({
  type: CREATE_WORKSPACE,
  payload: newWorkspaceData,
});

const updateWorkspace = (updatedWorkspaceData) => ({
  type: UPDATE_WORKSPACE,
  payload: updatedWorkspaceData,
});
const deleteWorkspace = (workspaceId) => ({
  type: DELETE_WORKSPACE,
  payload: workspaceId,
});

export const getAllWorkspacesThunk = () => async (dispatch) => {
  const response = await fetch(`/api/workspaces`);

  if (response.ok) {
    const allWorkspaceData = await response.json();
    const normalizedWorkspaceData = normalizer(allWorkspaceData);
    dispatch(loadWorkspaces(normalizedWorkspaceData));
  }
};

export const getWorkspaceByIdThunk = (workspaceId) => async (dispatch) => {
  const response = await fetch(`/api/workspaces/${workspaceId}`);

  if (response.ok) {
    const singleWorkspaceData = await response.json();
    const normalizedWorkspaceData = {
      [singleWorkspaceData.id]: singleWorkspaceData,
    };
    dispatch(loadWorkspaces(normalizedWorkspaceData));
  }
};

export const createWorkspaceThunk = (newWorkspaceData) => async (dispatch) => {
  try {
    const response = await fetch(`/api/workspaces`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newWorkspaceData),
    });
    const data = await response.json();
    const normalizedWorkspaceData = {
      [data.id]: data,
    };
    dispatch(createWorkspace(normalizedWorkspaceData));
    dispatch(clearActiveChannel());
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateWorkspaceThunk =
  (newWorkspaceData, workspaceId) => async (dispatch) => {
    try {
      const response = await fetch(`/api/workspaces/${workspaceId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newWorkspaceData),
      });
      const data = await response.json();
      const normalizedWorkspaceData = {
        [data.id]: data,
      };
      dispatch(updateWorkspace(normalizedWorkspaceData));
      return data;
    } catch (error) {
      console.log(error);
    }
  };

export const addUserToWorkspaceThunk =
  (userId, workspaceId) => async (dispatch) => {
    const response = await fetch(`/api/workspaces/${workspaceId}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
      }),
    });
    const data = await response.json();
    dispatch(getAllWorkspacesThunk());
    return data;
  };

export const deleteWorkspaceThunk = (workspaceId) => async (dispatch) => {
  const response = await fetch(`/api/workspaces/${workspaceId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteWorkspace(workspaceId));
  }
};

const initialState = {};

const workspacesReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_WORKSPACES:
      return { ...state, ...action.payload };
    case CREATE_WORKSPACE:
      return { ...state, ...action.payload };
    case UPDATE_WORKSPACE:
      return { ...state, ...action.payload };
    case DELETE_WORKSPACE:
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

export default workspacesReducer;
