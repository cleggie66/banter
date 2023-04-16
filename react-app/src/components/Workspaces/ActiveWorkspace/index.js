import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorkspaceByIdThunk } from "../../../store/workspace";
import { useModal } from "../../../context/Modal";
import ManageWorkspaceModal from "./ManageWorkspaceModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "../../Dashboard/Dashboard.css";
import { loadActiveWorkspace } from "../../../store/activeWorkspace";

const ActiveWorkspace = ({ workspaceId }) => {
  const dispatch = useDispatch();
  const { setModalContent } = useModal();

  useEffect(() => {
    dispatch(getWorkspaceByIdThunk(workspaceId));
  }, [dispatch, workspaceId]);

  const activeWorkspace = useSelector((state) => state.workspaces);
  const newActiveWorkspace = activeWorkspace[workspaceId];

  if (!newActiveWorkspace) {
    return null;
  }

  const handleWorkspaceNameClick = () => {
    setModalContent(<ManageWorkspaceModal workspace={newActiveWorkspace} />);
    dispatch(loadActiveWorkspace(workspaceId));
  };

  return (
    <>
      <button
      className="dashboard-workspace-name"
      onClick={handleWorkspaceNameClick}
    >
      {`${newActiveWorkspace.name}`}
      <button>Add a User to this Workspace</button>
    </button>
  </>
);
};

export default ActiveWorkspace;
