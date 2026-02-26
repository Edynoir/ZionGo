importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyBU6alnTXTPNC6lPRaRbHc1Hfw1obb49tI",
    authDomain: "ziongo.firebaseapp.com",
    projectId: "ziongo",
    storageBucket: "ziongo.firebasestorage.app",
    messagingSenderId: "307023261082",
    appId: "1:307023261082:web:70e2ebea3e5bdbe6109e23",
    measurementId: "G-3X6Y0GZ3YS"
};

// Initialize the Firebase app in the service worker
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background messages
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/vite.svg', // Fallback icon, could update to app logo later
        badge: '/vite.svg'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
