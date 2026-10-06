// src/pages/Home.tsx
import { Box, Card, CardContent, Typography } from "@mui/material";

interface StatCardProps {
  label: string;
  value: string;
  caption: string;
}

function StatCard({ label, value, caption }: StatCardProps) {
  return (
    <Card variant="outlined" sx={{ bgcolor: "#fff", minWidth: 220 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {label}
        </Typography>
        <Typography variant="h4" component="div" sx={{ fontWeight: 500, my: 1 }}>
          {value}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {caption}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 500 }}>
        Home
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        <StatCard label="Users"         value="125"   caption="Registered users" />
        <StatCard label="Activities"    value="48"    caption="Active activities" />
        <StatCard label="Activity Logs" value="1,240" caption="Recorded actions" />
      </Box>
    </Box>
  );
}