// src/App.tsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
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
        sx={{
          flexGrow: 1,
          bgcolor: "#f5f5f5",
          minHeight: "100vh",
          p: 3,
        }}
      >
        {/* Spacer so content isn't hidden behind the fixed AppBar */}
        <Toolbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;