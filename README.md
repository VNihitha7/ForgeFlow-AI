# ForgeFlow AI 🚀

### Smart Manufacturing CRM & Sales Pipeline Platform

ForgeFlow AI is a modern full-stack CRM platform built for manufacturing and industrial businesses to manage leads, sales pipelines, analytics, and team performance efficiently.

Designed with a premium SaaS-style interface, ForgeFlow AI helps businesses streamline customer management, track sales progress visually, and gain valuable business insights in real-time.

---

# ✨ Features

## 📊 Dashboard Analytics

* Real-time business overview
* Revenue tracking charts
* Lead conversion insights
* KPI performance cards
* Hot leads section

---

## 👥 Leads Management

* Add new leads
* Edit existing leads
* Delete leads
* Search functionality
* MongoDB database integration
* Priority & status tracking

---

## 🔄 Drag & Drop Sales Pipeline

* Kanban-style pipeline management
* Drag leads between stages
* Live status updates
* Visual workflow tracking

Pipeline Stages:

* New Lead
* Quotation Sent
* Negotiation
* Won

---

## 📈 Analytics Dashboard

* Revenue analytics
* Lead distribution charts
* Conversion tracking
* Business performance metrics
* Interactive charts using Recharts

---

## 👨‍💼 Team Management

* Add/remove team members
* Performance tracking
* Employee statistics
* Deal tracking
* Professional team cards UI

---

## ⚙️ Settings Module

* Company settings
* Notification preferences
* Theme toggle support
* User profile section

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Tailwind CSS
* React Router DOM
* Recharts
* React Icons
* React Hot Toast
* @hello-pangea/dnd

---

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* REST APIs

---

# 🗄️ Database

MongoDB Atlas is used for:

* Leads storage
* Analytics calculations
* Pipeline updates
* CRM data management

---

# 📂 Project Structure

```bash
ForgeFlow-AI/
│
├── client/
│   ├── src/
│   │   ├── api/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── components/
│   │   └── App.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
```

---

# 🚀 Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/ForgeFlow-AI.git
```

---

## 2️⃣ Install Frontend Dependencies

```bash
cd client
npm install
```

---

## 3️⃣ Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## 4️⃣ Configure Environment Variables

Create `.env` file inside `server/`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## 5️⃣ Run Backend Server

```bash
npm run server
```

---

## 6️⃣ Run Frontend

```bash
cd ../client
npm run dev
```

---

# 🌐 API Endpoints

## Leads API

| Method | Endpoint                | Description            |
| ------ | ----------------------- | ---------------------- |
| GET    | `/api/leads`            | Get all leads          |
| POST   | `/api/leads`            | Add new lead           |
| PUT    | `/api/leads/:id`        | Update lead            |
| DELETE | `/api/leads/:id`        | Delete lead            |
| PUT    | `/api/leads/status/:id` | Update pipeline status |

---

## Dashboard API

| Method | Endpoint         |
| ------ | ---------------- |
| GET    | `/api/dashboard` |

---

## Analytics API

| Method | Endpoint         |
| ------ | ---------------- |
| GET    | `/api/analytics` |

---

# 🎨 UI Highlights

* Modern SaaS dashboard design
* Dark mode interface
* Fully responsive layout
* Smooth animations
* Glassmorphism-inspired cards
* Premium admin panel experience

---

# 📸 Future Improvements

* Authentication & Authorization
* Role-based access
* AI-powered lead scoring
* Email automation
* WhatsApp integration
* Real-time notifications
* Export reports
* Mobile app support

---

# 👩‍💻 Author

### Nihitha Velpuru

Built with passion using the MERN Stack 🚀

---

# ⭐ Support

If you like this project:

* Star the repository
* Fork the project
* Share feedback
* Contribute improvements

---

# 📜 License

This project is licensed under the MIT License.

---

# 💡 Inspiration

ForgeFlow AI was created to simplify manufacturing sales operations through a clean, intelligent, and modern CRM experience.
