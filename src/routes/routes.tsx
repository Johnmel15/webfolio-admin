import React, { ReactNode } from "react";
// import About from "../pages/About";
// import TechStack from "../pages/TechStack";
import { useAuthStore } from "../store/authStore";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import { DashboardContainer } from "../pages/Dashboard";
// import { MainLayout } from "../layout";
import { About } from "../pages/About";
import { TechStack } from "../pages/TechStack";
import { ExperiencePage } from "../pages/Experience";
import { ProjectPage } from "../pages/Projects";
import { EmailPage } from "../pages/Emails";
import { LeadsPage } from "../pages/Leads";
import { SettingsPage } from "../pages/Settings";
import { LoginPage } from "../pages/Login";
import IdleLogout from "../components/IdleLogout";
import Layout from "@/layout/Layout";

interface RouteProps {
  children: ReactNode;
}

// Protected Route Component
const ProtectedRoute: React.FC<RouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Layout>{children}</Layout>;
};

// Public Route Component (redirect if authenticated)
const PublicRoute: React.FC<RouteProps> = ({ children }) => {
  const { isAuthenticated, token } = useAuthStore();

  if (isAuthenticated && token) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

const AppRoutes: React.FC = () => {
  const { logout } = useAuthStore();
  const handleLogout = () => {
    logout();
    return <Navigate to="/login" replace />;
  };

  return (
    <BrowserRouter>
      <IdleLogout logoutCallback={handleLogout} />
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
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
        <Route
          path="/experience"
          element={
            <ProtectedRoute>
              <ExperiencePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <ProjectPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/emails"
          element={
            <ProtectedRoute>
              <EmailPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leads"
          element={
            <ProtectedRoute>
              <LeadsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
