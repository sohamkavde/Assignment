# React Interactive App
A React-based web application featuring a counter, user data form, rich text editor, and optional authentication/dashboard. Built using Material UI, React Spring, Recharts,React-quill, and React Router Dom.

# 🚀 Features
### ✅ 1. Counter Component
- Increment, decrement, and reset buttons.
- Maintains count across re-renders (localStorage).
- Background color increases linearly (Bezier curve).
- Reset brings background color level back to 0.
### ✅ 2. User Data Form

- User input fields: name, address, email, phone,summary.
- Auto-generates user ID and saves data in Firebase Firestore.
- Detects unsaved changes and warns users before closing the browser.
### ✅ 3. Rich Text Editor
- Displays user data inside a rich text editor.
- Supports bold, italic, underline, lists.
- Ensures data persistence.

### ✅ 4. Additional Features (Optional)
- Google Authentication (Public Routes).
- Dashboard with charts (Recharts) for user's dummy data.
 
### 📂 Project Structure (MVC Pattern)
Breaks the component into MVC Patthern for better readablity and debugging.

# 🛠 Tech Stack
- Frontend: React, React Router, Material UI
- State Management: Local Storage
- Animations: React Spring
- Charts: Recharts
- Authentication: Google Sign-In 
- Backend - Firebase Authentication, Firebase Firestore


### 🎯 Installation & Setup

1️⃣ Clone the repository:
```
git clone https://github.com/sohamkavde/Assignment.git
cd Assignment
```

2️⃣ Install dependencies:
```
npm install
```
3️⃣ Start the development server:
```
npm start
```

### 📜 Usage Guide
>Counter Page: Tracks a count value with animated background.
User Form: Stores user data and alerts for unsaved changes.
Rich Text Editor: Formats and displays user input.
Authentication : Secure login with Google.
Dashboard: Visualizes dummy user data in charts.


### 📝 Future Improvements
🔹 User Details : Name,Email,Phone for profile creation
🔹 Advance DataTable Integration with Material UI.
🔹 Mock authentication for login.
🔹 Add security
🔹 Safe Private Routes


### 💡  Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.