# Home Tutor Finder

A full-stack web platform that connects students with home tutors. Students search for tutors and request sessions, tutors publish their available time slots and accept or reject requests, and admins approve tutor accounts and manage users.

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)

## Features

**Students**
- Register, log in and maintain a profile
- Search tutors and view tutor profiles
- See a tutor's available slots and send a booking request
- Track request status from the student dashboard

**Tutors**
- Create, enable/disable and delete availability slots
- Approve or reject incoming booking requests
- Manage profile and view their students from the tutor dashboard

**Admins**
- Approve or reject new tutor registrations
- View and remove users from the admin dashboard

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, React Router, Tailwind CSS, Axios |
| Backend | Spring Boot 3.3 (Java 17), Spring Security, Spring Data JPA, Bean Validation |
| Database | MySQL 8 |
| Deployment | Docker, Docker Compose, Kubernetes manifests |

## Project Structure

```
HOMETUTORFINDER/
├── frontend/            # React + Vite client
│   └── src/
│       ├── pages/       # Landing, auth, student / tutor / admin dashboards
│       ├── components/  # Reusable UI (Card, Button, Input, Nav, Sidebar)
│       └── api/         # Axios API client
├── backend/             # Spring Boot REST API
│   └── src/main/java/com/hometutor/
│       ├── controller/  # Auth, Student, Tutor, Slot, Admin endpoints
│       ├── service/     # Business logic
│       ├── repository/  # JPA repositories
│       ├── entity/      # User, StudentProfile, TutorProfile, TutorSlot, BookingRequest
│       └── auth/        # Token-based auth filter
├── k8s/                 # Kubernetes manifests (frontend, backend, MySQL)
└── docker-compose.yml
```

## API Overview

| Base path | Purpose |
|---|---|
| `/api/auth` | Register and log in |
| `/api/student` | Student profile, dashboard, booking requests |
| `/api/tutor` | Tutor search, profile, dashboard, request approval |
| `/api/slot` | Tutor availability slots |
| `/api/admin` | Tutor approval and user management |

## Run Locally

### With Docker Compose (recommended)

```bash
docker compose up --build
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:1202
- MySQL: localhost:3307

### Manually

**Backend** (needs Java 17 and MySQL running on port 3306 with a `hometutor` database):

```bash
cd backend
# set spring.datasource.username / password in src/main/resources/application.properties
./mvnw spring-boot:run
```

**Frontend:**

```bash
cd frontend
npm install
npm run dev
```

### Kubernetes

```bash
kubectl apply -f k8s/
```

## Author

**Paramkusam Saketha Sreevatsa** - [GitHub](https://github.com/Klusaketh) · [LinkedIn](https://www.linkedin.com/in/paramkusamsakethasreevatsa)
