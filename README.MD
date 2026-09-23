# 🚀 Personal Portfolio — Saurabh Singh

A modern, responsive, and full-stack developer portfolio built to showcase my **skills, projects, education, experience, and development journey**.

The portfolio includes a public-facing website as well as a secure **admin panel** for managing projects, skills, education, and contact messages.

## 🌐 Live Website

🔗 **Portfolio:** [Add your deployed portfolio URL here]

## 📂 GitHub Repository

🔗 **GitHub:** https://github.com/saurabh-singh-07

---

## ✨ Features

### 👨‍💻 Public Portfolio

* Modern and responsive UI
* About Me section
* Skills section
* Projects showcase
* Education section
* Services section
* Contact form
* Social media links
* Responsive design for mobile, tablet, and desktop
* Dark/Light mode
* Smooth animations and transitions

### 📁 Projects

The portfolio dynamically displays projects with:

* Project title
* Project description
* Technologies used
* GitHub repository
* Live demo
* Project image

### 🛠️ Skills

Skills are organized into different categories:

* Frontend
* Backend
* Database
* Programming Languages
* Tools
* Other Technologies

### 📩 Contact System

Visitors can contact me through the portfolio contact form.

The contact system includes:

* Name
* Email
* Subject
* Message
* MongoDB message storage
* Email notification using Nodemailer
* Admin message management
* Read/unread message status

### 🔐 Admin Panel

The portfolio contains a protected admin section that allows me to manage portfolio content.

Admin features include:

* Admin authentication
* Protected routes
* Dashboard
* Add projects
* Update projects
* Delete projects
* Add skills
* Update skills
* Delete skills
* Manage education
* View contact messages
* Mark messages as read
* Delete messages
* Image upload

---

## 🧑‍💻 Tech Stack

### Frontend

* React.js
* TypeScript
* Tailwind CSS
* React Router
* Axios
* Framer Motion
* Lucide React
* React Icons
* React Hot Toast

### Backend

* Node.js
* Express.js
* TypeScript
* REST API
* Express Session
* Nodemailer
* Multer

### Database

* MongoDB
* Mongoose
* MongoDB Atlas

### Image Storage

* Cloudinary

### Development Tools

* Git
* GitHub
* VS Code
* npm
* Vite

---

## 🏗️ Project Architecture

```text
Portfolio
│
├── Frontend
│   │
│   ├── Components
│   ├── Pages
│   ├── Admin
│   ├── Context
│   ├── API
│   ├── Assets
│   └── App
│
├── Backend
│   │
│   ├── Controllers
│   ├── Models
│   ├── Routes
│   ├── Middleware
│   ├── Config
│   └── Server
│
└── Database
    └── MongoDB
```

---

## 🔄 How It Works

The portfolio follows a full-stack architecture:

```text
                ┌─────────────────┐
                │     Visitor     │
                └────────┬────────┘
                         │
                         ▼
                ┌─────────────────┐
                │ React Frontend  │
                └────────┬────────┘
                         │
                      Axios
                         │
                         ▼
                ┌─────────────────┐
                │ Express Backend │
                └────────┬────────┘
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
       ┌──────────────┐      ┌──────────────┐
       │   MongoDB    │      │  Cloudinary  │
       └──────────────┘      └──────────────┘
```

---

## 🔑 Authentication

The admin panel uses authentication to protect administrative routes.

Authentication flow:

```text
Admin Login
     ↓
Express Authentication API
     ↓
Session Created
     ↓
Authentication Verified
     ↓
Protected Admin Routes
     ↓
Admin Dashboard
```

The frontend verifies the authentication session when the application loads.

---

## 📸 Image Upload

Project images are uploaded through the backend using `Multer`.

The backend then uploads the image to **Cloudinary** and stores the resulting image URL in MongoDB.

```text
Frontend
   ↓
FormData
   ↓
Express API
   ↓
Multer
   ↓
Cloudinary
   ↓
Image URL
   ↓
MongoDB
```

---

## 📋 Main API Modules

The backend provides REST APIs for different portfolio resources.

| Module    | Purpose                                  |
| --------- | ---------------------------------------- |
| Admin     | Authentication and session management    |
| Project   | Create, read, update and delete projects |
| Skill     | Manage technical skills                  |
| Education | Manage education details                 |
| Contact   | Store and manage visitor messages        |

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/saurabh-singh-07/your-portfolio-repository.git
```

```bash
cd your-portfolio-repository
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the backend directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

SESSION_SECRET=your_session_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

EMAIL_USER=your_email
EMAIL_PASS=your_google_app_password
```

> ⚠️ Never commit your `.env` file or any API keys, passwords, database credentials, or secrets to GitHub.

Add this to `.gitignore`:

```gitignore
.env
.env.local
.env.production
node_modules/
dist/
```

---

## ▶️ Run the Project

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

---

## 📱 Responsive Design

The portfolio is designed to work across:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📟 Tablet

---

## 📂 Featured Projects

### 🖼️ Thumbnest — AI Thumbnail Generator

A full-stack AI-powered thumbnail generation application.

**Tech Stack:**

React, TypeScript, Node.js, Express, MongoDB, Cloudinary

🔗 Live: https://thumbnest.vercel.app/

🔗 GitHub: https://github.com/saurabh-singh-07/Thumbnest

---

### 🏏 ICTCricinfo

A cricket application that provides live scores, recent matches, upcoming matches, player information, and cricket-related information.

**Tech Stack:**

React, JavaScript, Tailwind CSS, Axios

🔗 Live: https://saurabh-singh-07.github.io/ICTCricinfo.02/

---

### 🍽️ RestroBooks

A restaurant-focused web application built with a modern responsive interface.

**Tech Stack:**

React, JavaScript, HTML5, CSS3, Tailwind CSS

🔗 Live: https://saurabh-singh-07.github.io/RestroBooks/

---

## 🎯 Purpose

This portfolio was created to:

* Showcase my development skills
* Display my projects
* Demonstrate full-stack development knowledge
* Practice real-world application architecture
* Provide an easy way for recruiters and developers to contact me
* Continuously update and improve my professional profile

---

## 📈 Future Improvements

Some planned improvements include:

* [ ] Portfolio analytics dashboard
* [ ] Visitor tracking
* [ ] Live visitor count
* [ ] Improved admin dashboard
* [ ] More portfolio animations
* [ ] Blog section
* [ ] Resume management
* [ ] Advanced project filtering
* [ ] Improved SEO
* [ ] Performance optimization

---

## 👨‍💻 About Me

Hi, I'm **Saurabh Singh**, a BCA student and aspiring **MERN Stack / Frontend Developer**.

I enjoy building modern web applications using **React, JavaScript, TypeScript, Node.js, Express.js, and MongoDB**.

I'm continuously improving my skills through projects, problem-solving, and learning modern web development technologies.

---

## 🤝 Connect With Me

* **GitHub:** https://github.com/saurabh-singh-07
* **LinkedIn:** Add your LinkedIn profile
* **LeetCode:** Add your LeetCode profile
* **Portfolio:** Add your deployed portfolio URL

---

## ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub.

Thanks for visiting my portfolio! 🚀

---

### 📄 License

This project is created for personal and educational purposes.
