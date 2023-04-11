import { useDispatch } from "react-redux";
import { login } from "../../store/session";

const DemoLogin = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(login("demo@aa.io", "password" ));
  };

  return <button onClick={onClick} >Demo login</button>;
};

export default DemoLogin;
