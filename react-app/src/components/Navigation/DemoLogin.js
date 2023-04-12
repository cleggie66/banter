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

  return <button onClick={onClick} >Demo login</button>;
};

export default DemoLogin;
