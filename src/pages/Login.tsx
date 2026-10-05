// src/pages/Login.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    Typography,
} from "@mui/material";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/app");
};

return (
    <Box
        sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#f5f5f5",
            p: 2,
        }}
    >
    <Card sx={{ width: 400, maxWidth: "100%" }} elevation={3}>
        <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 500 }}>
                Sign In
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Welcome back. Please enter your details.
            </Typography>

        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
            <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
            />
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
            />
            <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{ mt: 1 }}
            >
                Sign In
            </Button>
        </Box>
        </CardContent>
    </Card>
    </Box>
);
}