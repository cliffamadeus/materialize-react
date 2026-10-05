// src/components/Sidebar.tsx
import { useNavigate, useLocation } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const drawerWidth = 240;
const collapsedWidth = 64;

const items = [
    { label: "Home",    path: "/",        icon: <HomeIcon /> },
    { label: "About",   path: "/about",   icon: <InfoIcon /> },
    { label: "Contact", path: "/contact", icon: <ContactMailIcon /> },
];

interface SidebarProps {
    open: boolean;
}

export default function Sidebar({ open }: SidebarProps) {
    const navigate = useNavigate();
    const location = useLocation();

return (
    <Drawer
        variant="permanent"
        anchor="left"
        sx={{
        width: open ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        borderRight: "1px solid #e0e0e0",
        transition: (theme) =>
            theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        "& .MuiDrawer-paper": {
        width: open ? drawerWidth : collapsedWidth,
        overflowX: "hidden",
        boxSizing: "border-box",
        borderRight: "none",   
        boxShadow: "none",
        transition: (theme) =>
            theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        }}
    >
      {/* Spacer so the first list item isn't hidden under the fixed AppBar */}
    <Toolbar />

        <List sx={{ pt: 1, px: 1 }}>
            {items.map(({ label, path, icon }) => {
                const selected = location.pathname === path;
                const button = (
                <ListItemButton
                    selected={selected}
                    onClick={() => navigate(path)}
                    sx={{
                        minHeight: 48,
                        borderRadius: 1,
                        justifyContent: "center",
                        px: 1.5,
                        "&.Mui-selected": {
                        bgcolor: "#e3f2fd",
                        color: "#1976d2",
                        "& .MuiListItemIcon-root": { color: "#1976d2" },
                        },
                    }}
                >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        justifyContent: "center",
                        color: "inherit",
                    }}
                >
                {icon}
                </ListItemIcon>
                    {open && (
                        <ListItemText
                        primary={label}
                        sx={{ ml: 2, my: 0 }}
                        />
                    )}
                </ListItemButton>
        );

        return (
            <ListItem key={path} disablePadding sx={{ mb: 0.5 }}>
                {open ? button : (
                    <Tooltip title={label} placement="right" arrow>
                    {button}
                    </Tooltip>
                )}
            </ListItem>
            );
        })}
        </List>
    </Drawer>
    );
}