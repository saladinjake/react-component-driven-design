import { Route, Routes, Navigate } from "react-router-dom";
import LoginLayout from "modules/Login";

function Login() {
  return (
      <Routes>
            <Route index element={<LoginLayout />} />
            <Route path="/*" element={<Navigate to="/login" replace />} />
      </Routes>
  );
}

export default Login;
