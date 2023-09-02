import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDmu8NQ1kfFCvYDabdxQkiExo02ICx7KNM',
  authDomain: 'easy-a9ed2.firebaseapp.com',
  projectId: 'easy-a9ed2',
  storageBucket: 'easy-a9ed2.appspot.com',
  messagingSenderId: '910347933924',
  appId: '1:910347933924:web:1b135329711facdf5fb4f1',
  measurementId: 'G-HFQJT7R2X0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

function App() {
  const [count, setCount] = useState(0);

  const notificationsState = useNotificationPermission();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>{notificationsState}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;

function useNotificationPermission() {
  const [state, setState] = useState<string | undefined>();

  useEffect(() => {
    if (!('Notification' in window)) {
      // Check if the browser supports notifications
      setState('not supported');
      return;
    }
    console.log(Notification.permission);
    if (Notification.permission === 'granted') {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      // const notification = new Notification('Already set!');
      // console.log({ notification });
      setState('granted');
    } else if (Notification.permission !== 'denied') {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        console.log(permission);
        setState(permission.toString());
        // If the user accepts, let's create a notification
        if (permission === 'granted') {
          const notification = new Notification('Hi there!');
          console.log({ notification });
        }
      });
    }
  }, []);

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them anymore.
  return state;
}