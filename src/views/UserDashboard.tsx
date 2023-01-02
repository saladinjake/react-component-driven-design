import { Route, Routes } from "react-router-dom";
import Dashboard from "../layout/LayoutOne";
import UserDashboardHome from "modules/UserDashboard/UserDashboardHome";
import UserDetail from "modules/UserDashboard/User";
function UserDashboard() {
  return (
    <Dashboard>
      <Routes>
        <Route index element={<UserDashboardHome />} />
        <Route path="/manage/:id" element={<UserDetail />} />
      </Routes>
    </Dashboard>
  );
}

export default UserDashboard;
