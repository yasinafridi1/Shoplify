
import { useSelector } from "react-redux";
import AdminRoutes from "./AdminRoutes";
import CustomerRoutes from "./CustomerRoutes";
import { auth } from "./redux/action/authAction";

function App() {
  const user = useSelector((state) => state.userInfo.user);

  const isAdmin = false;



  return (
    <>
      {
        isAdmin ? <AdminRoutes /> : <CustomerRoutes />
      }
    </>
  );
}

export default App;
