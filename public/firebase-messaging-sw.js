// Here is is the code snippet to initialize Firebase Messaging in the Service
// Worker when your app is not hosted on Firebase Hosting.

// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: 'AIzaSyDmu8NQ1kfFCvYDabdxQkiExo02ICx7KNM',
  authDomain: 'easy-a9ed2.firebaseapp.com',
  projectId: 'easy-a9ed2',
  storageBucket: 'easy-a9ed2.appspot.com',
  messagingSenderId: '910347933924',
  appId: '1:910347933924:web:1b135329711facdf5fb4f1',
  measurementId: 'G-HFQJT7R2X0',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
console.log('[firebase-messaging-sw.js] alive');

messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
