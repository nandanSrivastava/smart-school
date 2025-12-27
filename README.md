# Smart School Management System

A highly advanced, full-featured school management system built with Next.js, Tailwind CSS, and Node.js/Express.

## Features
-   **Modern UI**: Built with Next.js 14, Tailwind CSS, and Framer Motion for a premium look and feel.
-   **Modular Architecture**: Clean separation of concerns with feature-based structure in both frontend and backend.
-   **Authentication**: Secure JWT-based authentication system with protected routes.
-   **Database**: MongoDB integration with Mongoose for robust data management.

## Project Structure
-   `/frontend`: Next.js application.
-   `/backend`: Node.js/Express API.

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/nandanSrivastava/smart-school.git
   cd smart-school
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   # Create .env file and add your MONGO_URI and JWT_SECRET
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   # Create .env.local file and add NEXT_PUBLIC_API_URL
   npm run dev
   ```

## License
MIT
