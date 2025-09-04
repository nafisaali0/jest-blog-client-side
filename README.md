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
