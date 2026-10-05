// src/components/Sidebar.tsx
import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const drawerWidth = 240;

const items = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Sidebar({ open, onClose }: SidebarProps) {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div style={{ width: drawerWidth }}>
        <List>
          {items.map(({ label, path }) => (
            <ListItem key={path} disablePadding>
              <ListItemButton onClick={() => handleNavigate(path)}>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}