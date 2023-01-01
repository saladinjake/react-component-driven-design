import { Route, Routes } from "react-router-dom";
import Dashboard from "../layout/LayoutOne";
import UserDashboardHome from "modules/UserDashboard/UserDashboardHome";

function UserDashboard() {
  return (
    <Dashboard>
      <Routes>
        <Route index element={<UserDashboardHome />} />
      </Routes>
    </Dashboard>
  );
}

export default UserDashboard;
