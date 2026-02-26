import { useEffect } from 'react';
import { getToken, onMessage } from 'firebase/messaging';
import { messaging, db } from '../firebase/config';
import { useUserStore } from '../store/useUserStore';
import { doc, updateDoc } from 'firebase/firestore';

// Replace with the VAPID key from Firebase Console > Project Settings > Cloud Messaging > Web configuration
const VAPID_KEY = 'BLMWmhbUwdd7HLtc0XVBjMUW99nzRC4Go9-x7j3WQBX38_G_BiM3G0RMqYbidF6NNkizaJQNlww0InYBUEpVZQU';

export const usePushNotifications = () => {
    const { user } = useUserStore();

    useEffect(() => {
        if (!user) return; // Only request tokens for logged-in users

        const requestPermissionAndGetToken = async () => {
            try {
                // Request Permission
                console.log('Requesting notification permission...');
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
                    } else {
                        console.log('No registration token available. Request permission to generate one.');
                    }
                } else {
                    console.log('Notification permission denied or ignored.');
                }
            } catch (err) {
                console.error('An error occurred while retrieving or saving the token. ', err);
            }
        };

        requestPermissionAndGetToken();

        // Listen for foreground messages (when app is open)
        const unsubscribe = onMessage(messaging, (payload) => {
            console.log('[Foreground message received]', payload);
            // Could display a custom toast notification here if desired
        });

        return () => {
            unsubscribe();
        };
    }, [user]);

    return null;
};
