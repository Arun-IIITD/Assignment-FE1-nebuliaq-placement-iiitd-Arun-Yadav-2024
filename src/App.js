import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import MetricsTable from './MetricsTable';
import './App.css';

const data = [
  {
      "service": "order-platform",
      "client": { "requests": 767, "rate": "0.85 req/s", "p75": 26.97, "p90": 1.37, "p99": 1.45, "error": 0.40 },
      "server": { "requests": 845, "rate": "0.95 req/s", "p75": 24.97, "p90": 1.27, "p99": 1.35, "error": 0.35 }
  },
  {
      "service": "payment-gateway",
      "client": { "requests": 1000, "rate": "1.20 req/s", "p75": 20.00, "p90": 1.10, "p99": 1.20, "error": 0.25 },
      "server": { "requests": 1100, "rate": "1.30 req/s", "p75": 18.50, "p90": 1.00, "p99": 1.10, "error": 0.20 }
  },
  {
      "service": "user-authentication",
      "client": { "requests": 950, "rate": "1.10 req/s", "p75": 22.10, "p90": 1.20, "p99": 1.30, "error": 0.30 },
      "server": { "requests": 980, "rate": "1.15 req/s", "p75": 20.90, "p90": 1.15, "p99": 1.25, "error": 0.25 }
  },
  {
      "service": "inventory-management",
      "client": { "requests": 800, "rate": "0.90 req/s", "p75": 24.00, "p90": 1.30, "p99": 1.40, "error": 0.35 },
      "server": { "requests": 850, "rate": "1.00 req/s", "p75": 23.00, "p90": 1.25, "p99": 1.35, "error": 0.30 }
  },
  {
      "service": "shipping-service",
      "client": { "requests": 700, "rate": "0.80 req/s", "p75": 28.00, "p90": 1.50, "p99": 1.60, "error": 0.45 },
      "server": { "requests": 750, "rate": "0.85 req/s", "p75": 26.50, "p90": 1.40, "p99": 1.50, "error": 0.40 }
  },
  {
      "service": "notification-service",
      "client": { "requests": 1200, "rate": "1.50 req/s", "p75": 18.00, "p90": 1.00, "p99": 1.10, "error": 0.20 },
      "server": { "requests": 1250, "rate": "1.60 req/s", "p75": 17.50, "p90": 0.95, "p99": 1.05, "error": 0.15 }
  },
  {
      "service": "recommendation-engine",
      "client": { "requests": 1100, "rate": "1.40 req/s", "p75": 19.50, "p90": 1.10, "p99": 1.20, "error": 0.25 },
      "server": { "requests": 1150, "rate": "1.50 req/s", "p75": 18.00, "p90": 1.00, "p99": 1.10, "error": 0.20 }
  },
  {
      "service": "customer-support",
      "client": { "requests": 650, "rate": "0.75 req/s", "p75": 29.00, "p90": 1.60, "p99": 1.70, "error": 0.50 },
      "server": { "requests": 680, "rate": "0.80 req/s", "p75": 27.50, "p90": 1.50, "p99": 1.60, "error": 0.45 }
  },
  {
      "service": "analytics-service",
      "client": { "requests": 1050, "rate": "1.25 req/s", "p75": 21.00, "p90": 1.15, "p99": 1.25, "error": 0.30 },
      "server": { "requests": 1100, "rate": "1.30 req/s", "p75": 20.00, "p90": 1.10, "p99": 1.20, "error": 0.25 }
  },
  {
      "service": "content-delivery",
      "client": { "requests": 1400, "rate": "1.70 req/s", "p75": 15.00, "p90": 0.90, "p99": 1.00, "error": 0.15 },
      "server": { "requests": 1450, "rate": "1.80 req/s", "p75": 14.00, "p90": 0.85, "p99": 0.95, "error": 0.10 }
  },
  {
      "service": "search-service",
      "client": { "requests": 1250, "rate": "1.55 req/s", "p75": 17.00, "p90": 0.95, "p99": 1.05, "error": 0.18 },
      "server": { "requests": 1300, "rate": "1.65 req/s", "p75": 16.00, "p90": 0.90, "p99": 1.00, "error": 0.12 }
  },
  {
      "service": "email-service",
      "client": { "requests": 1150, "rate": "1.35 req/s", "p75": 19.00, "p90": 1.05, "p99": 1.15, "error": 0.22 },
      "server": { "requests": 1200, "rate": "1.45 req/s", "p75": 18.00, "p90": 1.00, "p99": 1.10, "error": 0.20 }
  },
  {
      "service": "media-streaming",
      "client": { "requests": 1500, "rate": "1.80 req/s", "p75": 14.00, "p90": 0.80, "p99": 0.90, "error": 0.10 },
      "server": { "requests": 1550, "rate": "1.90 req/s", "p75": 13.00, "p90": 0.75, "p99": 0.85, "error": 0.08 }
  },
  {
      "service": "data-sync",
      "client": { "requests": 1000, "rate": "1.20 req/s", "p75": 21.00, "p90": 1.10, "p99": 1.20, "error": 0.28 },
      "server": { "requests": 1050, "rate": "1.25 req/s", "p75": 20.00, "p90": 1.05, "p99": 1.15, "error": 0.24 }
  },
  {
      "service": "video-conferencing",
      "client": { "requests": 1350, "rate": "1.65 req/s", "p75": 16.50, "p90": 0.95, "p99": 1.05, "error": 0.15 },
      "server": { "requests": 1400, "rate": "1.75 req/s", "p75": 15.50, "p90": 0.90, "p99": 1.00, "error": 0.12 }
  },
  {
      "service": "file-storage",
      "client": { "requests": 900, "rate": "1.10 req/s", "p75": 23.00, "p90": 1.20, "p99": 1.30, "error": 0.35 },
      "server": { "requests": 950, "rate": "1.15 req/s", "p75": 22.00, "p90": 1.15, "p99": 1.25, "error": 0.32 }
  },
  {
      "service": "cms-platform",
      "client": { "requests": 1150, "rate": "1.35 req/s", "p75": 20.00, "p90": 1.10, "p99": 1.20, "error": 0.25 },
      "server": { "requests": 1200, "rate": "1.40 req/s", "p75": 19.50, "p90": 1.05, "p99": 1.15, "error": 0.20 }
  },
  {
      "service": "api-gateway",
      "client": { "requests": 900, "rate": "1.10 req/s", "p75": 24.00, "p90": 1.30, "p99": 1.40, "error": 0.30 },
      "server": { "requests": 950, "rate": "1.20 req/s", "p75": 23.00, "p90": 1.25, "p99": 1.35, "error": 0.28 }
  },
  {
      "service": "load-balancer",
      "client": { "requests": 1050, "rate": "1.25 req/s", "p75": 22.00, "p90": 1.15, "p99": 1.25, "error": 0.30 },
      "server": { "requests": 1100, "rate": "1.35 req/s", "p75": 21.00, "p90": 1.10, "p99": 1.20, "error": 0.25 }
  }
];

function App() {
  return (
      <Container maxWidth="lg">
          <Box sx={{ my: 4 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                  Service Metrics Dashboard
              </Typography>
              <Box className="table-wrapper">
                  <MetricsTable data={data} />
              </Box>
          </Box>
      </Container>
  );
}

export default App;
