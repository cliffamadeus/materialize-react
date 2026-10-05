// src/pages/Contact.tsx
import { Box, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 500 }}>
        Contact
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Get in touch at <strong>hello@example.com</strong>.
      </Typography>
    </Box>
  );
}