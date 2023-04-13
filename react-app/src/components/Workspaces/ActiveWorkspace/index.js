import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorkspaceByIdThunk } from "../../../store/workspace";
import { useParams } from "react-router-dom";

const ActiveWorkspace = () => {
  const dispatch = useDispatch();
  const { workspaceId } = useParams();

  useEffect(() => {
    dispatch(getWorkspaceByIdThunk(workspaceId));
  }, [dispatch, workspaceId]);

  const activeWorkspace = useSelector((state) => state.workspaces);
  const newActiveWorkspace = activeWorkspace[workspaceId];

 

  if (!newActiveWorkspace) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>{`${newActiveWorkspace.name}`}</h2>
    </>
  );
};

export default ActiveWorkspace;
