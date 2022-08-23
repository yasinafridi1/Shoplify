import AdminRoutes from "./AdminRoutes";
import CustomerRoutes from "./CustomerRoutes";

function App() {
  const isAdmin = true;
  return (
    <>
      {
        isAdmin ? <AdminRoutes /> : <CustomerRoutes />
      }
    </>
  );
}

export default App;
