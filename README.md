# Polytunnel Sensor Monitoring Dashboard

A real-time dashboard to visualize and compare temperature and humidity data collected from inside and outside a polytunnel. The app uses Firebase Realtime Database for data storage and retrieval, React for the frontend (bootstrapped with Vite), and Chart.js for interactive data visualization.

## Features

- **Real-time Data:** Automatically updates as new sensor readings arrive.
- **Indoor vs Outdoor Comparison:** See average temperature and humidity for each indoor section compared to outdoor readings.
- **Interactive Charts:** Visualize trends with responsive, modern line graphs.
- **Clean UI:** Styled with Tailwind CSS for a neat and mobile-friendly interface.

## Project Structure

```
polytunnel-monitor/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   └── SensorChart.jsx
│   ├── firebase.js
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
└── README.md
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Firebase Project & Realtime Database](https://firebase.google.com/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/polytunnel-monitor.git
cd polytunnel-monitor
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Firebase

- Create a file at `src/firebase.js`.
- Add your Firebase project configuration as shown below:

```js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, onValue };
```

### 4. (Optional) Configure Tailwind CSS

If you want to use Tailwind CSS for styling, ensure you have a `tailwind.config.js` file:

```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [require('@tailwindcss/forms')],
}
```

### 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the dashboard.

## Firebase Data Structure Example

Your Firebase Realtime Database should be structured as follows:

```
Outdoor/
  2025-05-07_11:50:02/
    Humidity: 50.2
    Temperature: 39.2

Section1/
  Sensor1/
    2025-05-07_11:50:02/
      Humidity: 50.2
      Temperature: 39.2
  Sensor2/
    ...
Section2/
  ...
Section3/
  ...
```

## Customization

- **Sections/Sensors:** Adjust the number of sections or sensors in `Dashboard.jsx` as needed.
- **Chart Colors:** Change colors in the chart datasets for your preferences.
- **Error Handling:** Add more robust error handling as desired.
