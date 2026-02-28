# 🏡 Airbnb Clone – Travel & Holiday Hotel Booking Web App

A full-stack Airbnb Clone web application that allows users to search, explore, and book hotels based on location. This project replicates core Airbnb functionalities with secure authentication, wishlist management, caching, rate limiting, and email notifications.

---

## 🚀 Live Features Overview

This application allows users to:

- 🔍 Search hotels based on location
- 🏨 View hotel details (price, description, ratings, reviews, availability status)
- 📅 Book hotels (shows occupied if already booked)
- ❤️ Add hotels to wishlist
- 🔐 Secure login & signup using JWT & Cookies
- 📧 Receive email notifications using Nodemailer
- ⚡ Experience faster performance with caching
- 🛡 Protected routes with authentication & authorization
- 🚦 API rate limiting for security

---

# 🛠 Tech Stack

## 🌐 Frontend
- HTML5
- CSS3
- JavaScript
- Tailwind CSS
- React Toastify (for notifications)

## ⚙ Backend
- Node.js
- Express.js
- EJS (Server-Side Rendering)
- MongoDB (Database)
- Mongoose (ODM)

## 🔐 Authentication & Security
- JWT (JSON Web Token)
- Cookie-based Authentication
- bcrypt (Password hashing)
- cookie-parser
- Rate Limiting
- Caching

## 📩 Other Integrations
- Nodemailer (Email Service)

---

# ✨ Core Features

## 🏨 Hotel Management
- Display hotels based on search location
- Show hotel details:
  - Price
  - Description
  - Ratings
  - Reviews
  - Type of hotel
  - Availability status (Occupied / Available)
- Dynamic rendering using SSR (EJS)

---

## 🔍 Smart Location Search
- Users can search nearby locations
- Displays hotels based on search input
- Designed for travel and holiday stays

---

## 📅 Booking System
- Users can book available hotels
- Prevents double booking
- Shows “Occupied” if already booked

---

## ❤️ Wishlist Feature
- Users can store their favorite hotels
- Wishlist saved in database
- Only accessible to authenticated users

---

## 🔐 Authentication System
- JWT-based authentication
- Cookie-based session handling
- Secure password hashing using bcrypt
- Protected routes for booking & wishlist
- Login / Register functionality

---

## 📧 Email Notifications
- Integrated Nodemailer
- Sends confirmation emails
- Used for authentication or booking notifications

---

## 🚦 Rate Limiting
- Protects APIs from brute force attacks
- Prevents abuse of login & booking endpoints

---

## ⚡ Caching
- Improves performance
- Reduces database load
- Speeds up frequently accessed routes

---


---

# 🧠 Additional Features Implemented

- Server-Side Rendering (SSR) using EJS
- Flash messages using React Toastify
- Clean UI using Tailwind CSS
- Organized MVC architecture
- RESTful API structure
- Secure environment variable usage
- Input validation & error handling
- Clean and maintainable codebase

---

# 🔮 Future Enhancements

Planned improvements to make this production-ready and scalable:

1. 💳 Add Payment Gateway Integration (Stripe / Razorpay)
2. 📈 Improve scalability (Microservices / Load balancing)
3. 🔎 Add auto-suggestions for search
4. 🔐 Improve authentication (OAuth / Google Login / 2FA)
5. 🌍 Add new tourist locations dynamically
6. 📊 Add admin dashboard for managing hotels & users
7. 📝 Add advanced review & rating moderation
8. 📱 Make fully responsive for all devices
9. ☁ Deploy with Docker & CI/CD pipeline
10. 🌎 Add map integration (Google Maps API)

---

# 🛡 Security Implementations

- Password hashing using bcrypt
- JWT token expiration
- HTTP-only cookies
- Rate limiting middleware
- Secure route protection
- Input sanitization
- Error handling middleware

---

# 🗄 Database Design

Stores:

- Users
- Hotels
- Bookings
- Reviews
- Wishlist

Each hotel contains:
- Location
- Type
- Rating
- Reviews
- Price
- Description
- Availability status

---

# 📌 How to Run Locally

```bash
# Clone repository
git clone <repo-url>

# Navigate into project
cd project-folder

# Install dependencies
npm install

# Create .env file and add required variables

# Run server
npm start

```
# 👨‍💻 Author

Developed as a Major Project – Airbnb Clone (Travel & Holiday Booking Web Application)
