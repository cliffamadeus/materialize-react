// src/pages/About.tsx
import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 500 }}>
        About Us
      </Typography>
      <Typography variant="body1" color="text.secondary">
        This is a simple demo navigation app built with Vite, React,
        TypeScript, and Material UI.
      </Typography>
    </Box>
  );
}