import { Route, Routes, Navigate } from "react-router-dom";
import Login from "modules/Login/index";

function LoginPage() {
  return (
      <Routes>
            <Route index element={<Login />} />
            <Route path="/*" element={<Navigate to="/login" replace />} />
      </Routes>
  );
}

export default LoginPage;
