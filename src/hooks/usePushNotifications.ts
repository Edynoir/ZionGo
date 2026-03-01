import { useEffect } from 'react';
import { getToken, onMessage } from 'firebase/messaging';
import { messaging, db } from '../firebase/config';
import { doc, updateDoc } from 'firebase/firestore';
import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';

// Replace with the VAPID key from Firebase Console > Project Settings > Cloud Messaging > Web configuration
const VAPID_KEY = 'BLMWmhbUwdd7HLtc0XVBjMUW99nzRC4Go9-x7j3WQBX38_G_BiM3G0RMqYbidF6NNkizaJQNlww0InYBUEpVZQU';

export const requestNotificationPermission = async (user: any) => {
    if (!user) return false;

    try {
        if (!Capacitor.isNativePlatform()) {
            // --- WEB FLOW ---
            console.log('Requesting web notification permission...');
            const permission = await Notification.requestPermission();

            if (permission === 'granted') {
                console.log('Notification permission granted.');

                // Get FCM Token
                const currentToken = await getToken(messaging, {
                    vapidKey: VAPID_KEY
                });

                if (currentToken) {
                    console.log('FCM Token received:', currentToken);
                    // Save the token to the user document in Firestore
                    await updateDoc(doc(db, 'users', user.uid), {
                        fcmToken: currentToken
                    });
                    console.log('FCM Token successfully saved to Firestore user document.');
                    return true;
                } else {
                    console.log('No registration token available. Request permission to generate one.');
                    return false;
                }
            } else {
                console.log('Notification permission denied or ignored.');
                return false;
            }
        } else {
            // --- NATIVE MOBILE FLOW (Capacitor+Firebase) ---
            console.log('Requesting native notification permission...');
            let permStatus = await PushNotifications.checkPermissions();

            if (permStatus.receive === 'prompt') {
                permStatus = await PushNotifications.requestPermissions();
            }

            if (permStatus.receive !== 'granted') {
                console.log('Native push notification permission denied');
                return false;
            }

            // Register with Apple / Google to receive token
            await PushNotifications.register();
            return true;
        }
    } catch (err) {
        console.error('An error occurred while requesting notification permission. ', err);
        return false;
    }
};

export const usePushNotifications = () => {
    useEffect(() => {
        // --- WEB FLOW ---
        if (!Capacitor.isNativePlatform()) {
            try {
                const unsubscribe = onMessage(messaging, (payload) => {
                    console.log('[Web Foreground Message Received]', payload);
                });
                return () => unsubscribe();
            } catch (err) {
                console.error('Error setting up web onMessage listener:', err);
            }
        }
        // --- NATIVE MOBILE FLOW ---
        else {
            const registerListeners = async () => {
                try {
                    await PushNotifications.addListener('registration', async (token) => {
                        console.log('Push Registration Success. Token:', token.value);
                        // Optional: Send this token to Firestore here as well if the user is authenticated
                    });

                    await PushNotifications.addListener('registrationError', (error) => {
                        console.error('Push Registration Error:', JSON.stringify(error));
                    });

                    await PushNotifications.addListener('pushNotificationReceived', (notification) => {
                        console.log('Push Received:', JSON.stringify(notification));
                        // You can trigger a local notification or UI state update here
                    });

                    await PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
                        console.log('Push Action Performed:', JSON.stringify(notification));
                    });

                    console.log('Native Push Listeners Initialized.');
                } catch (err) {
                    console.error('Error initializing native push listeners:', err);
                }
            };

            registerListeners();

            return () => {
                PushNotifications.removeAllListeners();
            };
        }
    }, []);

    return null;
};
