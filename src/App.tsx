// src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
    <Box sx={{ display: "flex" }}>
        <Navbar
            sidebarOpen={sidebarOpen}
            onMenuClick={() => setSidebarOpen((prev) => !prev)}
        />
    <Sidebar open={sidebarOpen} />

    <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "#f5f5f5", minHeight: "100vh", p: 3 }}
    >
        <Toolbar />
        {/* The matched child route renders here */}
        <Outlet />
    </Box>
    </Box>
    );
}

function App() {
    return (
    <Routes>
      {/* Public */}
        <Route path="/" element={<Login />} />

      {/* Protected dashboard — layout route with child routes */}
        <Route path="/app" element={<DashboardLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
        </Route>

      {/* Anything else → back to login */}
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    );
}

export default App;