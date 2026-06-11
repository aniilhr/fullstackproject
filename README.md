# 🚀 Full Stack Web Application

A modern full-stack web application built with **React.js** on the frontend and **Django REST Framework** on the backend. The project demonstrates secure authentication, API integration, responsive design, and database-driven functionality.

---

## 📖 Overview

This application follows a client-server architecture:

* **Frontend:** React + Vite
* **Backend:** Django + Django REST Framework
* **Database:** SQLite
* **Authentication:** User Registration & Login
* **API Communication:** REST APIs

The project is designed to provide a seamless user experience while maintaining a scalable and maintainable codebase.

---

## ✨ Key Features

### 🔐 Authentication

* User Registration
* Secure Login System
* Logout Functionality
* Protected Routes

### 🌐 Frontend

* Modern React Architecture
* Responsive Design
* Reusable Components
* Client-side Routing
* API Integration

### ⚙️ Backend

* RESTful API Development
* Database Management
* User Authentication APIs
* Data Validation
* Error Handling

### 💾 Database

* SQLite Database
* User Data Storage
* Persistent Application Data

---

## 🏗️ Project Architecture

```text
fullstackproject-main
│
├── Frontend
│   └── project
│       ├── src
│       ├── public
│       ├── package.json
│       └── vite.config.js
│
├── Backend
│   └── project
│       ├── manage.py
│       ├── project
│       ├── app
│       └── db.sqlite3
│
└── README.md
```

---

## 🛠️ Technology Stack

| Category           | Technologies                      |
| ------------------ | --------------------------------- |
| Frontend           | React.js, JavaScript, HTML5, CSS3 |
| Backend            | Django, Django REST Framework     |
| Database           | SQLite                            |
| Version Control    | Git & GitHub                      |
| Package Managers   | npm, pip                          |
| Development Server | Vite                              |

---

# ⚡ Getting Started

## Prerequisites

Before running the project, ensure the following are installed:

* Python 3.10+
* Node.js 18+
* npm
* Git

---

# 🔧 Backend Setup

### Step 1: Navigate to Backend

```bash
cd Backend/project
```

### Step 2: Create Virtual Environment

```bash
python -m venv venv
```

### Step 3: Activate Virtual Environment

#### Windows

```bash
venv\Scripts\activate
```

#### Mac/Linux

```bash
source venv/bin/activate
```

### Step 4: Install Dependencies

```bash
pip install django
pip install djangorestframework
pip install django-cors-headers
```

### Step 5: Apply Database Migrations

```bash
python manage.py migrate
```

### Step 6: Start Backend Server

```bash
python manage.py runserver
```

Backend URL:

```text
http://127.0.0.1:8000/
```

---

# 🎨 Frontend Setup

Open a new terminal.

### Step 1: Navigate to Frontend

```bash
cd Frontend/project
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start Development Server

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173/
```

---

# 🔄 API Communication Flow

```text
React Frontend
       │
       ▼
Django REST API
       │
       ▼
    SQLite
```

The React frontend sends requests to Django APIs, which process data and interact with the SQLite database.

---

# 📦 Useful Commands

### Backend

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### Frontend

```bash
npm install
npm run dev
npm run build
npm run preview
```

---

# 🚀 Deployment Checklist

Before deploying:

* Remove hardcoded secrets
* Store credentials in environment variables
* Set DEBUG = False
* Configure allowed hosts
* Configure production database
* Test all API endpoints
* Build frontend assets

---

# 🧪 Testing

Verify the following before submission:

* User Registration
* User Login
* Protected Routes
* API Responses
* Database Operations
* Responsive Design

---

# 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

# 👨‍💻 Author

### Anil Kumar

**Full Stack Developer**

* GitHub: https://github.com/aniilhr
* LinkedIn: https://www.linkedin.com/in/hranil/
* Portfolio: https://anilhr.ccbp.tech/

---

⭐ If you found this project useful, consider giving it a star on GitHub.
