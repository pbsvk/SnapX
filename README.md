# SnapX

&#x20;

SnapX is a modern social media platform built with React, Appwrite, and other cutting-edge technologies. It features a seamless authentication system, an engaging explore page, and intuitive content interaction functionalities like liking, saving, and editing posts.

🚀 **Sign Up and Enjoy**: [SnapX on Vercel](https://snapx-green.vercel.app/)\
📌 **Author**: pbsvk

---

## ⚙️ Tech Stack

SnapX leverages the following technologies for a high-performance, scalable, and maintainable web application:

- **Frontend**: React.js, TypeScript, React Query, React Router DOM
- **Backend as a Service (BaaS)**: Appwrite (Authentication, Database, Storage)
- **Styling**: Tailwind CSS, ShadCN
- **State & Data Management**: React Query
- **Utilities**: Zod (Validation), React Hook Form, Lucide Icons
- **Build & Development**: Vite, ESLint, TypeScript, PostCSS

---

## 🔋 Features

### ✅ Authentication System

A robust authentication system ensuring security and user privacy.

### 🌍 Explore Page

Discover new posts and explore featured content from top creators.

### ❤️ Like and Save Functionality

Users can like and save posts, with dedicated pages for managing liked and saved content.

### 📄 Detailed Post Page

View an immersive post detail page with related posts.

### 👤 Profile Page

Users can showcase their liked posts and edit their profile.

### 🔍 Browse Other Users

Explore other users' profiles and posts effortlessly.

### ✍️ Create & Edit Posts

- User-friendly post creation with file management and drag-drop support.
- Edit post functionality allowing users to update their content anytime.

### 📱 Responsive UI with Bottom Bar

A mobile-friendly navigation system that enhances the user experience.

### ⚡ React Query Integration

- Automatic caching to optimize performance
- Parallel queries for efficient data retrieval
- First-class mutations to handle state updates

### 🛠️ Appwrite Integration

Using **Appwrite** as a backend service for authentication, database management, and file storage, ensuring a scalable and secure infrastructure.

---

## 🛠️ Installation & Setup

### 📌 Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (Recommended: Latest LTS)
- **npm** or **yarn** (Package manager)
- **Vite** (For development and build)

### 🔽 Clone Repository

```bash
  git clone https://github.com/pbsvk/snapx.git
  cd snapx
```

### 📦 Install Dependencies

```bash
npm install
# or
yarn install
```

### 🔑 Set Up Environment Variables

Create a `.env.local` file in the project root and configure it with your Appwrite credentials:

```ini
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_STORAGE_ID=your-storage-id
VITE_APPWRITE_DATABASE_ID=your-database-id
VITE_APPWRITE_SAVES_COLLECTION_ID=your-collection-id
VITE_APPWRITE_POST_COLLECTION_ID=your-collection-id
VITE_APPWRITE_USER_COLLECTION_ID=your-collection-id
```

### 🚀 Start Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173/` by default.

### 📦 Build for Production

```bash
npm run build
# or
yarn build
```

### 🔍 Lint the Code

```bash
npm run lint
# or
yarn lint
```

### 🔬 Preview Production Build

```bash
npm run preview
# or
yarn preview
```

---

## 📜 Scripts

The project comes with predefined scripts for ease of development:

```json
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
```

---

## 📂 Dependencies

### 🔹 Core Dependencies

```json
  "dependencies": {
    "@hookform/resolvers": "^4.1.2",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-slot": "^1.1.2",
    "@tanstack/react-query": "^5.66.9",
    "appwrite": "^17.0.0",
    "autoprefixer": "^10.4.20",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.475.0",
    "next-themes": "^0.4.4",
    "postcss": "^8.5.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-dropzone": "^14.3.8",
    "react-hook-form": "^7.54.2",
    "react-intersection-observer": "^9.15.1",
    "react-router-dom": "^7.2.0",
    "sonner": "^2.0.1",
    "tailwind-merge": "^3.0.2",
    "tailwindcss": "^3.3.3",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.24.2"
  }
```

### 🔹 Development Dependencies

```json
  "devDependencies": {
    "@eslint/js": "^9.19.0",
    "@types/node": "^22.13.5",
    "@types/react": "^19.0.8",
    "@types/react-dom": "^19.0.3",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.19.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.18",
    "globals": "^15.14.0",
    "typescript": "~5.7.2",
    "typescript-eslint": "^8.22.0",
    "vite": "^6.1.0"
  }
```

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

- Fork the repository
- Create a new branch (`git checkout -b feature-name`)
- Commit your changes (`git commit -m 'Add some feature'`)
- Push to the branch (`git push origin feature-name`)
- Create a Pull Request

---

## 📬 Contact

For any inquiries or collaboration requests, feel free to reach out.

📧 Email: [your-email@example.com](mailto\:bsvkpadala@gmail.com)\
🐙 GitHub: [Your GitHub](https://github.com/pbsvk)\
📘 LinkedIn: [Your LinkedIn](https://linkedin.com/in/pbsvk)

Happy Coding! 🚀

