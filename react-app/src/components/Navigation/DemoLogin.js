import { useDispatch } from "react-redux";
import { login } from "../../store/session";
import { useHistory } from "react-router-dom";
const DemoLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(login("demo@aa.io", "password" ));
    history.push("/")

  };

  return <button onClick={onClick} >DEMO LOGIN</button>;
};

export default DemoLogin;
