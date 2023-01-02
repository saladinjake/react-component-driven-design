import { Suspense, lazy, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ErrorBoundary from "../layout/ErrorBoundary";
import PrivateRoute from "./PrivateRoute";
import Fallback from "../views/Fallback";
import { useQuery } from "@tanstack/react-query";




const UserDashboard = lazy(() => import("../views/UserDashboard"));
const Login = lazy(() => import("../views/Login"));
const NotFound = lazy(() => import("../views/NotFound"));
const UserDetail= lazy(() => import("../views/UserDetail"));



function DefaultLayout() {
  const [isLoading,setIsLoading] = useState(false)
  
  return (
    <ErrorBoundary>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/login/*" element={<Login />} />
          {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}

      {/* <Route element={<PrivateRoute />}>  */}
          <Route   path="/dashboard" element={<UserDashboard />} />
          <Route   path="/manage-user/:id" element={<UserDetail />} />  
            
           
          {/* </Route>  */}

          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default DefaultLayout;
