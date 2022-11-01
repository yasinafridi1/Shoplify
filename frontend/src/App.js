import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminRoutes from "./AdminRoutes";
import CustomerRoutes from "./CustomerRoutes";
import { auth } from "./redux/action/authAction";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = window.localStorage.getItem('user');
    dispatch(auth(JSON.parse(data)));
  }, []);
  const user = useSelector((state) => state.userInfo.user);
  let isAdmin;
  if (user.payload) {
    isAdmin = user.payload.role === "admin" ? true : false;
  } else {
    isAdmin = false;
  }
  return (
    <>
      <CustomerRoutes />
      {/* {
        isAdmin ? <AdminRoutes /> : <CustomerRoutes />
      } */}
    </>
  );
}

export default App;
