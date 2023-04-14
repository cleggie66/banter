import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorkspaceByIdThunk } from "../../../store/workspace";
import { useParams } from "react-router-dom";
import { useModal } from "../../../context/Modal";
import ManageWorkspaceModal from "./ManageWorkspaceModal";
import "../../Dashboard/Dashboard.css";
const ActiveWorkspace = () => {
  const dispatch = useDispatch();
  const { workspaceId } = useParams();
  const { setModalContent, setOnModalClose } = useModal();

  useEffect(() => {
    dispatch(getWorkspaceByIdThunk(workspaceId));
  }, [dispatch, workspaceId]);

  const activeWorkspace = useSelector((state) => state.workspaces);
  const newActiveWorkspace = activeWorkspace[workspaceId];

  if (!newActiveWorkspace) {
    return <h1>Loading...</h1>;
  }

  const handleWorkspaceNameClick = () => {
    setModalContent(<ManageWorkspaceModal workspace={newActiveWorkspace} />);
  };

  return (
    <>
      {/* <h2>{`${newActiveWorkspace.name}`}</h2> */}
      <button
        className="dashboard-workspace-name"
        onClick={handleWorkspaceNameClick}
      >{`${newActiveWorkspace.name}`}</button>
    </>
  );
};

export default ActiveWorkspace;
