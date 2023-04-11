import { useSelector } from "react-redux";
import WorkspacesIndex from "../Workspaces/WorkspacesIndex"

const HomePage = () => {
  const sessionUser = useSelector((state) => state.session.user);

    return (
        <>
        <h1>HOME PAGE</h1>
        {sessionUser && (
            <>
                <WorkspacesIndex/>
            </>
        )}
        </>
    )
}

export default HomePage