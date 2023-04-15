const LOAD_ACTIVE_WORKSPACE = "activeChannel/LOAD_ACTIVE_WORKSPACE";
const CLEAR_WORKSPACE = "activeChannel/CLEAR_WORKSPACE";

export const loadActiveWorkspace = (id) => ({
  type: LOAD_ACTIVE_WORKSPACE,
  id,
});

export const clearActiveWorkspace = () => ({
  type: CLEAR_WORKSPACE,
});

const activeWorkspaceReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_ACTIVE_WORKSPACE:
      return { id: action.id };
    case CLEAR_WORKSPACE:
      return {};
    default:
      return state;
  }
};

export default activeWorkspaceReducer;
