import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
// Import required functions from the modular API
import { getMessaging, getToken } from '@react-native-firebase/messaging';
import { initializeApp } from '@react-native-firebase/app';

// Firebase configuration object
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
};

const Notification = () => {

    useEffect(() => {
        console.log('Hello eFfact World');
        initializeFirebase(); // Ensure Firebase is initialized before using any Firebase services
        getTokenFromFirebase(); // Now you can safely call the token function
    }, []);

    // Function to initialize Firebase
    const initializeFirebase = () => {
        try {
            // Initialize Firebase app with configuration
            initializeApp(firebaseConfig); // Pass the config object
            console.log('Firebase Initialized');
        } catch (error) {
            console.error('Firebase initialization error:', error);
        }
    };

    // Updated getToken function using the modular API
    const getTokenFromFirebase = async () => {
        try {
            const messaging = getMessaging(); // You don't need to call getApp() explicitly here
            const token = await getToken(messaging); // Get the FCM token
            console.log('FCM Token:', token);
        } catch (error) {
            console.error('Error getting token:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Hello World</Text>
            <Text>Notification</Text>
            {/* Wrap any text in a Text component */}
            <Text>FCM Token should appear here if initialized correctly.</Text>
        </View>
    );
};

export default Notification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
});