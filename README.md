# JestBlog

**JestBlog** is a full-stack blog application that allows users to create, read, update, and delete blogs. It includes features such as **likes/unlikes**, **comments**, and a **wishlist/reading list**. Each user has a personalized **dashboard** that displays their total comments, likes, followers, and blogs. Users can also manage their profiles through profile settings.  

🔗 **Live Demo:** [https://jestblog.netlify.app/](https://jestblog.netlify.app/)

---

## ✨ Features

- 🔐 **Authentication & Profiles** – User login, registration, profile view & profile settings  
- 📝 **Blog Management (CRUD)** – Create, read, update, and delete blogs  
- 👍 **Like / Unlike** – Engage with blog posts  
- 💬 **Comment System** – Add and manage comments on blogs  
- 📚 **Wishlist / Reading List** – Save blogs for later reading  
- 📊 **User Dashboard** – View stats (total comments, likes, followers, blogs)  
- 📱 **Responsive Design** – Built with Tailwind CSS for a clean and adaptive UI  

---

## 🛠️ Tech Stack

**Frontend:**
- React.js  
- Tailwind CSS  
- TanStack Query (React Query)  
- Axios  

**Backend:**
- Node.js  
- Express.js  
- MongoDB  

**Others:**
- Custom React Hooks  
- REST API  
- Firebase  

---

## 📂 Project Structure

```plaintext
jest-blog/
├── node_modules/
├── public/
├── src/
│   ├── assets/          # Static assets (images, icons, etc.)
│   ├── components/      # Reusable components
│   │   └── Functionality/ # Feature-specific components
│   ├── page/            # Page-level components (Home, Blog, etc.)
│   ├── shared/          # Shared components (Navbar, Footer, etc.)
│   ├── FireBase/        # Firebase config & auth logic
│   ├── hooks/           # Custom React hooks
│   ├── LayOut/          # Layout components (Dashboard, Main layout)
│   ├── Providers/       # Context providers (AuthProvider)
│   ├── Routes/          # React Router configuration
│   ├── index.css        # Tailwind base styles
│   └── main.jsx         # App entry point
│
├── .env.local           # Environment variables
├── .eslintrc.cjs        # ESLint configuration
├── .gitignore
├── index.html           # Root HTML file
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
└── tailwind.config.js   # Tailwind configuration
```
## 🚀 Getting Started

Follow these instructions to set up the project locally for development and testing.

---

## 📋 Prerequisites

Before running the project, make sure you have:

- **Node.js** (LTS recommended)  
- **MongoDB** (local installation or MongoDB Atlas)  

---

## 📥 Installation

1. **Clone the repository**:

```bash
git clone https://github.com/your-username/jestblog.git
cd jestblog
```

2. **Install dependencies**:
```npm install```


---

## 🔑 Environment Variables

Create a `.env.local` file in the **root directory of the frontend project**:

```env
VITE_IMAGE_HOSTING_KEY=your_image_hosting_key
```
⚠️ The backend `.env` file contains database credentials. Check the backend repository for details.


---


 ## 🖥️ Backend Repository

The backend for JestBlog is built with **Express.js** and **MongoDB**.  
You can find it here: [JestBlog Backend](https://github.com/nafisaali0/jest-blog-server-side)


---


## ▶️ Run the Application

Start the frontend development server:

```bash
npm run dev
```

---

## 🌐 Development URLs

- **Client:** [http://localhost:5173](http://localhost:5173)  
- **Server:** [http://localhost:5000](http://localhost:5000)


