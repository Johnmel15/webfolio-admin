import React, { ReactNode } from "react";
// import About from "../pages/About";
// import TechStack from "../pages/TechStack";
import { useAuthStore } from "../store/authStore";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import { DashboardContainer } from "../pages/Dashboard";
import { MainLayout } from "../layout";
import LoginForm from "../pages/Login";
import { About } from "../pages/About";
import { TechStack } from "../pages/TechStack";

interface RouteProps {
  children: ReactNode;
}

// Protected Route Component
const ProtectedRoute: React.FC<RouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  // return isAuthenticated ? (
  //   <>
  //     <MainLayout />
  //     {children}
  //   </>
  // ) : (
  //   <Navigate to="/login" />
  // );

  return (
    <>
      <MainLayout>{children}</MainLayout>
    </>
  );

  return;
};

// Public Route Component (redirect if authenticated)
const PublicRoute: React.FC<RouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? <Navigate to="/dashboard" /> : children;
};

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginForm />
            </PublicRoute>
          }
        />

        {/* Protected Routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardContainer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tech-stack"
          element={
            <ProtectedRoute>
              <TechStack />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
