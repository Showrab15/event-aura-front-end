# Event Management Web Application 🗓️

A fully functional **Event Management Web Application** built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).  
The application supports custom authentication, dynamic event operations, a search and filter system, and an intuitive interface designed for ease of use and performance.

[Live Demo] – *((https://eventa-aura.vercel.app/))*

---

## Overview
This web application allows users to:

- Browse upcoming events with search and filter functionality  
- Join events and track attendance  
- Add new events and manage their own events  
- Update or delete events they created  
- Authenticate using a **custom-built authentication system** without third-party packages  

It is designed with **performance, responsiveness, and user experience** in mind.

---

## Features ✨

### Navbar
- Logo + Website name  
- Navigation links: Home, Events, Add Event, My Event, Sign In (when logged out)  
- When logged in: User profile picture appears with dropdown:  
  - User name (non-clickable)  
  - Logout button  

### Homepage
- Custom-designed landing page  
- Highlights key features or events  

### Events (Private Route)
- Displays all events in **descending order by date and time**  
- Each event card shows:  
  - Event Title  
  - Name of the poster  
  - Date & Time  
  - Location  
  - Description  
  - Attendee Count  
  - Join Event button  
- Users can **join an event only once**, which increments AttendeeCount  
- Search events by title  
- Filter options:  
  - Today’s events  
  - Date range: Current week, Last week, Current month, Last month  

### Add Event (Private Route)
- Allows users to add new events via a form  
- Required fields:  
  - Event Title  
  - Name (poster)  
  - Date & Time  
  - Location  
  - Description  
  - AttendeeCount (default 0)  

### My Event (Private Route)
- Displays events created by the logged-in user  
- Event card includes:  
  - Event Title  
  - Name (poster)  
  - Date & Time  
  - Location  
  - Description  
  - AttendeeCount  
  - Update button (modal or separate route)  
  - Delete button (with confirmation before deletion)  

### Authentication
- Custom authentication system (no third-party packages)  
- **Registration Page:** Name, Email, Password, Photo URL  
- **Login Page:** Email, Password  
- Displays clear error messages for invalid credentials or missing fields  

---

## Tech Stack 🛠️

- **Frontend:** React.js, Vite, Tailwind CSS, Framer Motion, Lucide React, React Icons  
- **Backend:** Node.js, Express.js, MongoDB  
- **State & Data Management:** Axios, LocalForage, Match Sorter, Sort-by  
- **UI Enhancements:** SweetAlert2, SweetAlert2 React Content  
- **Styling & Performance:** TailwindCSS, Tailwind Line Clamp, Responsive design  

---

## Installation & Setup 🚀

1. **Clone the repository**
```bash
git clone https://github.com/your-username/event-management-app.git
cd event-management-app
```


2. **Install dependencies:**
```bash
npm install
```

3. **Add your Firebase configuration in an .env file:**
# Example
```bash
REACT_APP_API_URL=http://localhost:5000

```

4. **Start the development server:**
```bash
npm run dev
```
5. **Open your browser and navigate to:**
- http://localhost:5173

5. **Commit your changes:**
```bash
git commit -m "Describe your feature"
git push origin branch-name
```

### Usage 📝
- Browse Events: Navigate to the Events page, search, filter, and join events

- Add Event: Fill in the event details and submit

- My Event: View, update, or delete your own events

- Authentication: Register and login to access private routes

- Profile Dropdown: Access logout and user information

#### Scripts 📜
- Start Dev Server: npm run dev

- Build Project: npm run build

- Preview Build: npm run preview

- Lint Project: npm run lint

### Folder Structure 📁
```event-management-app/
├─ public/ # Public assets like index.html
├─ src/
│ ├─ components/ # React components (Navbar, EventCard, etc.)
│ ├─ pages/ # Pages (Home, Events, AddEvent, MyEvent, Login, Register)
│ ├─ utils/ # Utility functions (API calls, helper functions)
│ ├─ App.jsx # Main App component with routes
│ └─ main.jsx # React DOM entry point
├─ package.json # Project dependencies and scripts
└─ tailwind.config.js # Tailwind CSS configuration
```
#### License 📄
This project is licensed under the MIT License – see the LICENSE file for details.

##### Contact ✉️
Email: supto50showrab@gmail.com

Portfolio: https://showrab-paul-portfolio.vercel.app/


