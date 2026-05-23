const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

const connectDB =
  require("./config/db");

// ROUTES
const leadRoutes =
  require("./routes/leadRoutes");

const dashboardRoutes =
  require(
    "./routes/dashboardRoutes"
  );

const analyticsRoutes =
  require(
    "./routes/analyticsRoutes"
  );

const authRoutes =
  require(
    "./routes/authRoutes"
  );

// CONFIG
dotenv.config();

// CONNECT DATABASE
connectDB();

const app = express();

// MIDDLEWARE
app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

// ROUTES
app.use(
  "/api/leads",
  leadRoutes
);

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/dashboard",
  dashboardRoutes
);

app.use(
  "/api/analytics",
  analyticsRoutes
);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send(
    "ForgeFlow API Running 🚀"
  );
});

// PORT
const PORT =
  process.env.PORT || 5000;

// START SERVER
app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});