import { useEffect, useState } from "react";
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

  let admin;

  if (user.payload) {
    admin = user.payload.role === "admin" ? true : false;
  } else {
    admin = false;
  }
  return (
    <>
      {
        admin ? <AdminRoutes /> : <CustomerRoutes />
      }
    </>
  );
}

export default App;
