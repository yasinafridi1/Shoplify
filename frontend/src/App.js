import AdminRoutes from "./AdminRoutes";
import CustomerRoutes from "./CustomerRoutes";


function App() {
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
